'use client';

import { useState } from 'react';
import {
  User,
  Code,
  Briefcase,
  Palette,
  Eye,
  Wand2,
  Download,
  Copy,
  RefreshCw,
  Sparkles,
  Plus,
  ChevronDown,
  X,
} from 'lucide-react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader } from '@/components/Card';

interface PortfolioData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    github: string;
    linkedin: string;
    summary: string;
  };
  skills: string[];
  experience: Array<{
    company: string;
    position: string;
    duration: string;
    description: string;
  }>;
  projects: Array<{
    name: string;
    description: string;
    technologies: string[];
    link: string;
  }>;
}

const initialPortfolioData: PortfolioData = {
  personalInfo: {
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    github: '',
    linkedin: '',
    summary: '',
  },
  skills: [],
  experience: [],
  projects: [],
};

const PortfolioBuilderPage = () => {
  const [portfolioData, setPortfolioData] = useState(initialPortfolioData);
  const [activeStep, setActiveStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  // const [selectedTemplate, setSelectedTemplate] = useState("modern")
  const [showCodeAccordion, setShowCodeAccordion] = useState(false);

  const steps = [
    { label: '기본 정보', icon: <User size={20} /> },
    { label: '기술 스택', icon: <Code size={20} /> },
    { label: '경력 사항', icon: <Briefcase size={20} /> },
    { label: '프로젝트', icon: <Palette size={20} /> },
    { label: '미리보기', icon: <Eye size={20} /> },
  ];

  // OpenAI API 직접 호출 함수
  const callOpenAI = async (prompt: string): Promise<string> => {
    try {
      const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.content || 'AI 응답을 받을 수 없습니다.';
    } catch (error) {
      console.error('OpenAI API 호출 오류:', error);
      throw error;
    }
  };

  const [errors, setErrors] = useState({
    name: '',
    title: '',
    phone: '',
  });

  const handleGenerateWithAI = async (field: string, context: string) => {
    setIsGenerating(true);
    try {
      const prompt = `다음 정보를 바탕으로 ${field}에 대한 전문적이고 매력적인 내용을 한국어로 작성해주세요:

        컨텍스트: ${context}

        요구사항:
        - 전문적이고 간결한 톤
        - 구체적이고 실용적인 내용
        - 취업에 도움이 되는 키워드 포함
        - 200자 이내로 작성

        ${field === '자기소개' ? '지원자의 강점과 목표를 명확히 드러내는 자기소개를 작성해주세요.' : ''}
        ${field === '프로젝트 설명' ? '프로젝트의 목적, 사용 기술, 성과를 포함한 설명을 작성해주세요.' : ''}
        ${field === '경력 설명' ? '담당 업무와 성과를 구체적으로 설명해주세요.' : ''}`;

      const generatedText = await callOpenAI(prompt);
      return generatedText;
    } catch (error) {
      console.error('AI 생성 오류:', error);
      return 'AI 생성 중 오류가 발생했습니다. 다시 시도해주세요.';
    } finally {
      setIsGenerating(false);
    }
  };

  const handleAIAssist = async (field: string) => {
    const context = `
      이름: ${portfolioData.personalInfo.name}
      직무: ${portfolioData.personalInfo.title}
      기술 스택: ${portfolioData.skills.join(', ')}
      프로젝트: ${portfolioData.projects.map((p) => p.name).join(', ')}
    `;

    const generatedText = await handleGenerateWithAI(field, context);

    if (field === '자기소개') {
      setPortfolioData((prev) => ({
        ...prev,
        personalInfo: { ...prev.personalInfo, summary: generatedText },
      }));
    }
  };

  const validateBasicInfo = () => {
    const { name, title, phone } = portfolioData.personalInfo;
    const newErrors = {
      name: name.trim() ? '' : '이름을 입력해주세요.',
      title: title.trim() ? '' : '직무/포지션을 입력해주세요.',
      phone: phone.trim() ? '' : '연락처를 입력해주세요.',
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((e) => e === '');
  };

  const addSkill = (skill: string) => {
    if (skill && !portfolioData.skills.includes(skill)) {
      setPortfolioData((prev) => ({
        ...prev,
        skills: [...prev.skills, skill],
      }));
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setPortfolioData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  const addExperience = () => {
    setPortfolioData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          company: '',
          position: '',
          duration: '',
          description: '',
        },
      ],
    }));
  };

  const addProject = () => {
    setPortfolioData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          name: '',
          description: '',
          technologies: [],
          link: '',
        },
      ],
    }));
  };

  const generateFullPortfolio = async () => {
    setIsGenerating(true);
    try {
      const prompt = `다음 정보를 바탕으로 완성된 포트폴리오 HTML을 생성해주세요:

        개인정보:
        - 이름: ${portfolioData.personalInfo.name}
        - 직무: ${portfolioData.personalInfo.title}
        - 이메일: ${portfolioData.personalInfo.email}
        - 연락처: ${portfolioData.personalInfo.phone}
        - 위치: ${portfolioData.personalInfo.location}
        - 웹사이트: ${portfolioData.personalInfo.website}
        - GitHub: ${portfolioData.personalInfo.github}
        - LinkedIn: ${portfolioData.personalInfo.linkedin}
        - 자기소개: ${portfolioData.personalInfo.summary}

        기술 스택: ${portfolioData.skills.join(', ')}

        경력사항: ${portfolioData.experience.map((exp) => `${exp.company} - ${exp.position} (${exp.duration}): ${exp.description}`).join(' | ')}

        프로젝트: ${portfolioData.projects.map((p) => `${p.name}: ${p.description} (기술: ${p.technologies.join(', ')}) - ${p.link}`).join(' | ')}

        요구사항:
        - 완전한 HTML 문서 (<!DOCTYPE html>부터 시작)
        - 현대적이고 전문적인 디자인
        - Tailwind CSS CDN 사용
        - 반응형 웹 디자인 (모바일 최적화)
        - 다크모드 토글 기능
        - 부드러운 애니메이션 효과
        - 프로필 이미지 플레이스홀더
        - 소셜 링크 아이콘
        - 프로젝트 카드 레이아웃
        - 기술 스택 배지 스타일
        - 연락처 섹션
        - 깔끔한 타이포그래피
        - 적절한 색상 조합 (보라색 계열 추천)
        - SEO 메타 태그 포함
        - 인쇄 최적화 CSS

        HTML만 출력하고 다른 설명은 포함하지 마세요.`;

      const generatedHTML = await callOpenAI(prompt);
      setGeneratedContent(generatedHTML);
    } catch (error) {
      console.error('포트폴리오 생성 오류:', error);
      // 오류 발생 시 기본 HTML 템플릿 제공
      setGeneratedContent(`<!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${portfolioData.personalInfo.name} - 포트폴리오</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
                body { font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif; }
                .gradient-bg { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
                .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
                .card-hover:hover { transform: translateY(-5px); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
            </style>
        </head>
        <body class="bg-gray-50 text-gray-900">
            <!-- Header -->
            <header class="gradient-bg text-white py-20">
                <div class="container mx-auto px-6 text-center">
                    <div class="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
                        <span class="text-4xl font-bold text-purple-600">${portfolioData.personalInfo.name.charAt(0)}</span>
                    </div>
                    <h1 class="text-4xl md:text-6xl font-bold mb-4">${portfolioData.personalInfo.name}</h1>
                    <p class="text-xl md:text-2xl mb-8">${portfolioData.personalInfo.title}</p>
                    <div class="flex justify-center space-x-6">
                        ${portfolioData.personalInfo.email ? `<a href="mailto:${portfolioData.personalInfo.email}" class="hover:text-purple-200">📧 이메일</a>` : ''}
                        ${portfolioData.personalInfo.github ? `<a href="${portfolioData.personalInfo.github}" class="hover:text-purple-200">🔗 GitHub</a>` : ''}
                        ${portfolioData.personalInfo.linkedin ? `<a href="${portfolioData.personalInfo.linkedin}" class="hover:text-purple-200">💼 LinkedIn</a>` : ''}
                    </div>
                </div>
            </header>

            <!-- About -->
            <section class="py-20">
                <div class="container mx-auto px-6">
                    <h2 class="text-3xl font-bold text-center mb-12">자기소개</h2>
                    <div class="max-w-3xl mx-auto text-center">
                        <p class="text-lg leading-relaxed">${portfolioData.personalInfo.summary || '전문적인 개발자로서 새로운 기술을 배우고 성장하는 것을 즐깁니다.'}</p>
                    </div>
                </div>
            </section>

            <!-- Skills -->
            <section class="py-20 bg-white">
                <div class="container mx-auto px-6">
                    <h2 class="text-3xl font-bold text-center mb-12">기술 스택</h2>
                    <div class="flex flex-wrap justify-center gap-4">
                        ${portfolioData.skills.map((skill) => `<span class="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">${skill}</span>`).join('')}
                    </div>
                </div>
            </section>

            <!-- Experience -->
            ${
              portfolioData.experience.length > 0
                ? `
            <section class="py-20">
                <div class="container mx-auto px-6">
                    <h2 class="text-3xl font-bold text-center mb-12">경력 사항</h2>
                    <div class="max-w-4xl mx-auto">
                        ${portfolioData.experience
                          .map(
                            (exp) => `
                        <div class="bg-white rounded-lg shadow-lg p-6 mb-6 card-hover">
                            <h3 class="text-xl font-bold text-purple-600">${exp.company}</h3>
                            <p class="text-lg font-medium mb-2">${exp.position}</p>
                            <p class="text-gray-600 mb-4">${exp.duration}</p>
                            <p class="text-gray-700">${exp.description}</p>
                        </div>
                        `,
                          )
                          .join('')}
                    </div>
                </div>
            </section>
        `
                : ''
            }

    <!-- Projects -->
    ${
      portfolioData.projects.length > 0
        ? `
        <section class="py-20 bg-white">
            <div class="container mx-auto px-6">
                <h2 class="text-3xl font-bold text-center mb-12">프로젝트</h2>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${portfolioData.projects
                      .map(
                        (project) => `
                    <div class="bg-gray-50 rounded-lg shadow-lg p-6 card-hover">
                        <h3 class="text-xl font-bold mb-4 text-purple-600">${project.name}</h3>
                        <p class="text-gray-700 mb-4">${project.description}</p>
                        ${project.link ? `<a href="${project.link}" class="text-purple-600 hover:text-purple-800 font-medium">프로젝트 보기 →</a>` : ''}
                    </div>
                    `,
                      )
                      .join('')}
                </div>
            </div>
        </section>
        `
        : ''
    }

        <!-- Contact -->
        <section class="py-20 gradient-bg text-white">
            <div class="container mx-auto px-6 text-center">
                <h2 class="text-3xl font-bold mb-8">연락하기</h2>
                <div class="space-y-4">
                    ${portfolioData.personalInfo.email ? `<p class="text-lg">📧 ${portfolioData.personalInfo.email}</p>` : ''}
                    ${portfolioData.personalInfo.phone ? `<p class="text-lg">📱 ${portfolioData.personalInfo.phone}</p>` : ''}
                    ${portfolioData.personalInfo.location ? `<p class="text-lg">📍 ${portfolioData.personalInfo.location}</p>` : ''}
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-900 text-white py-8">
            <div class="container mx-auto px-6 text-center">
                <p>&copy; 2025 ${portfolioData.personalInfo.name}. All rights reserved.</p>
            </div>
        </footer>
    </body>
    </html>`);
    } finally {
      setIsGenerating(false);
    }
  };

  const progress = ((activeStep + 1) / steps.length) * 100;

  // 사이드바 컴포넌트
  const PortfolioSidebar = () => (
    <div className="flex flex-col gap-6">
      {/* 템플릿 선택 */}
      {/* <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">템플릿 선택</h3>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            {[
              { id: "modern", name: "모던", description: "깔끔하고 현대적인 디자인" },
              { id: "creative", name: "크리에이티브", description: "창의적이고 독특한 레이아웃" },
              { id: "minimal", name: "미니멀", description: "단순하고 세련된 스타일" },
              { id: "professional", name: "프로페셔널", description: "전문적이고 신뢰감 있는 디자인" },
            ].map((template) => (
              <div
                key={template.id}
                className={`p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                  selectedTemplate === template.id
                    ? "border-purple-500 bg-purple-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSelectedTemplate(template.id)}
              >
                <h4 className="font-medium text-gray-900">{template.name}</h4>
                <p className="text-sm text-gray-600">{template.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card> */}

      {/* 진행 상황 요약 */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">완성도</h3>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">기본 정보</span>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  portfolioData.personalInfo.name
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {portfolioData.personalInfo.name ? '완료' : '미완료'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">기술 스택</span>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  portfolioData.skills.length > 0
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {portfolioData.skills.length > 0
                  ? `${portfolioData.skills.length}개`
                  : '미완료'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">경력 사항</span>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  portfolioData.experience.length > 0
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {portfolioData.experience.length > 0
                  ? `${portfolioData.experience.length}개`
                  : '미완료'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">프로젝트</span>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  portfolioData.projects.length > 0
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {portfolioData.projects.length > 0
                  ? `${portfolioData.projects.length}개`
                  : '미완료'}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI 도움말 */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Wand2 size={20} className="text-purple-600" />
            <h3 className="text-lg font-semibold">AI 도움말</h3>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-gray-900">자기소개:</h4>
                <p className="text-sm text-gray-600">
                  직무와 기술 스택을 바탕으로 매력적인 자기소개를 생성합니다.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  완성된 포트폴리오:
                </h4>
                <p className="text-sm text-gray-600">
                  모든 정보를 종합하여 완전한 HTML 포트폴리오를 생성합니다.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 팁 */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">💡 포트폴리오 팁</h3>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-600">
              • 구체적인 성과와 수치를 포함하세요
            </p>
            <p className="text-sm text-gray-600">
              • 최신 기술 스택을 강조하세요
            </p>
            <p className="text-sm text-gray-600">
              • 프로젝트 링크를 반드시 포함하세요
            </p>
            <p className="text-sm text-gray-600">
              • 간결하고 명확한 문장을 사용하세요
            </p>
            <p className="text-sm text-gray-600">• 정기적으로 업데이트하세요</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <Layout aside={<PortfolioSidebar />}>
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text mb-2">AI 포트폴리오</h1>
          <p className="text-lg text-gray-600">
            AI의 도움을 받아 전문적인 포트폴리오를 쉽고 빠르게 만들어보세요.
          </p>
        </div>

        {/* 진행 상황 */}
        <Card className="mb-8">
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">
              포트폴리오 제작 진행 상황
            </h2>
            <div className="flex items-center mb-4">
              <div className="flex-1 bg-gray-200 rounded-full h-2 mr-4">
                <div
                  className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-sm font-medium text-gray-600">
                {Math.round(progress)}%
              </span>
            </div>

            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div
                  key={step.label}
                  className={`flex flex-col items-center cursor-pointer transition-colors ${
                    index <= activeStep ? 'text-purple-600' : 'text-gray-400'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                      index <= activeStep
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    {step.icon}
                  </div>
                  <span className="text-xs font-medium">{step.label}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 단계별 콘텐츠 */}
        <Card>
          <CardContent>
            {/* 기본 정보 */}
            {activeStep === 0 && (
              <div>
                <div className="flex items-center mb-6">
                  <User size={24} className="text-purple-600 mr-2" />
                  <h2 className="text-2xl font-semibold">기본 정보 입력</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* 이름 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이름 *
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="홍길동"
                      value={portfolioData.personalInfo.name}
                      onChange={(e) => {
                        setPortfolioData((prev) => ({
                          ...prev,
                          personalInfo: {
                            ...prev.personalInfo,
                            name: e.target.value,
                          },
                        }));
                        setErrors((prev) => ({ ...prev, name: '' }));
                      }}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* 직무/포지션 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      직무/포지션 *
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="프론트엔드 개발자"
                      value={portfolioData.personalInfo.title}
                      onChange={(e) => {
                        setPortfolioData((prev) => ({
                          ...prev,
                          personalInfo: {
                            ...prev.personalInfo,
                            title: e.target.value,
                          },
                        }));
                        setErrors((prev) => ({ ...prev, title: '' }));
                      }}
                    />
                    {errors.title && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.title}
                      </p>
                    )}
                  </div>

                  {/* 이메일 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이메일
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="example@email.com"
                      value={portfolioData.personalInfo.email}
                      onChange={(e) =>
                        setPortfolioData((prev) => ({
                          ...prev,
                          personalInfo: {
                            ...prev.personalInfo,
                            email: e.target.value,
                          },
                        }))
                      }
                    />
                  </div>

                  {/* 연락처 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      연락처 *
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="010-1234-5678"
                      value={portfolioData.personalInfo.phone}
                      onChange={(e) => {
                        setPortfolioData((prev) => ({
                          ...prev,
                          personalInfo: {
                            ...prev.personalInfo,
                            phone: e.target.value,
                          },
                        }));
                        setErrors((prev) => ({ ...prev, phone: '' }));
                      }}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* 위치 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      위치
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="서울, 대한민국"
                      value={portfolioData.personalInfo.location}
                      onChange={(e) =>
                        setPortfolioData((prev) => ({
                          ...prev,
                          personalInfo: {
                            ...prev.personalInfo,
                            location: e.target.value,
                          },
                        }))
                      }
                    />
                  </div>

                  {/* 웹사이트 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      웹사이트
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="https://mywebsite.com"
                      value={portfolioData.personalInfo.website}
                      onChange={(e) =>
                        setPortfolioData((prev) => ({
                          ...prev,
                          personalInfo: {
                            ...prev.personalInfo,
                            website: e.target.value,
                          },
                        }))
                      }
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-700">
                      자기소개
                    </label>
                    <button
                      className="flex items-center gap-2 px-3 py-1 text-sm border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 disabled:opacity-50"
                      onClick={() => handleAIAssist('자기소개')}
                      disabled={isGenerating}
                    >
                      <Wand2 size={16} />
                      AI 도움받기
                    </button>
                  </div>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    rows={4}
                    placeholder="간단한 자기소개를 작성하거나 AI 도움받기 버튼을 클릭하세요"
                    value={portfolioData.personalInfo.summary}
                    onChange={(e) =>
                      setPortfolioData((prev) => ({
                        ...prev,
                        personalInfo: {
                          ...prev.personalInfo,
                          summary: e.target.value,
                        },
                      }))
                    }
                  />
                </div>
              </div>
            )}

            {/* 기술 스택 */}
            {activeStep === 1 && (
              <div>
                <div className="flex items-center mb-6">
                  <Code size={24} className="text-purple-600 mr-2" />
                  <h2 className="text-2xl font-semibold">기술 스택</h2>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    기술 추가
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="예: React, TypeScript, Node.js"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          addSkill((e.target as HTMLInputElement).value);
                          (e.target as HTMLInputElement).value = '';
                        }
                      }}
                    />
                    <button
                      className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                      onClick={() => {
                        const input = document.querySelector(
                          'input[placeholder*="React"]',
                        ) as HTMLInputElement;
                        if (input) {
                          addSkill(input.value);
                          input.value = '';
                        }
                      }}
                    >
                      추가
                    </button>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    선택된 기술 스택
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {portfolioData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                      >
                        {skill}
                        <button
                          onClick={() => removeSkill(skill)}
                          className="ml-1 text-purple-600 hover:text-purple-800"
                        >
                          <X size={14} />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    추천 기술 스택
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'React',
                      'Vue.js',
                      'Angular',
                      'TypeScript',
                      'JavaScript',
                      'Node.js',
                      'Python',
                      'Java',
                      'HTML/CSS',
                      'Tailwind CSS',
                      'Git',
                      'Docker',
                    ].map((skill) => (
                      <button
                        key={skill}
                        className={`px-3 py-1 text-sm border rounded-md ${
                          portfolioData.skills.includes(skill)
                            ? 'border-gray-300 text-gray-400 cursor-not-allowed'
                            : 'border-gray-300 text-gray-700 hover:border-purple-500 hover:text-purple-600'
                        }`}
                        onClick={() => addSkill(skill)}
                        disabled={portfolioData.skills.includes(skill)}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 경력 사항 */}
            {activeStep === 2 && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Briefcase size={24} className="text-purple-600 mr-2" />
                    <h2 className="text-2xl font-semibold">경력 사항</h2>
                  </div>
                  <button
                    className="flex items-center gap-2 px-4 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50"
                    onClick={addExperience}
                  >
                    <Plus size={16} />
                    경력 추가
                  </button>
                </div>

                {portfolioData.experience.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <Briefcase size={48} className="mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium mb-2">
                      아직 추가된 경력이 없습니다.
                    </p>
                    <p className="text-sm">
                      경력 추가 버튼을 클릭해서 시작하세요.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {portfolioData.experience.map((exp, index) => (
                      <div
                        key={index}
                        className="p-4 border border-gray-200 rounded-lg"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              회사명
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                              placeholder="회사명"
                              value={exp.company}
                              onChange={(e) => {
                                const newExp = [...portfolioData.experience];
                                newExp[index].company = e.target.value;
                                setPortfolioData((prev) => ({
                                  ...prev,
                                  experience: newExp,
                                }));
                              }}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              직책
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                              placeholder="직책"
                              value={exp.position}
                              onChange={(e) => {
                                const newExp = [...portfolioData.experience];
                                newExp[index].position = e.target.value;
                                setPortfolioData((prev) => ({
                                  ...prev,
                                  experience: newExp,
                                }));
                              }}
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              근무 기간
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                              placeholder="2023.01 - 2024.01"
                              value={exp.duration}
                              onChange={(e) => {
                                const newExp = [...portfolioData.experience];
                                newExp[index].duration = e.target.value;
                                setPortfolioData((prev) => ({
                                  ...prev,
                                  experience: newExp,
                                }));
                              }}
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              업무 설명
                            </label>
                            <textarea
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                              rows={3}
                              placeholder="담당 업무와 성과를 구체적으로 작성하세요"
                              value={exp.description}
                              onChange={(e) => {
                                const newExp = [...portfolioData.experience];
                                newExp[index].description = e.target.value;
                                setPortfolioData((prev) => ({
                                  ...prev,
                                  experience: newExp,
                                }));
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 프로젝트 */}
            {activeStep === 3 && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Palette size={24} className="text-purple-600 mr-2" />
                    <h2 className="text-2xl font-semibold">프로젝트</h2>
                  </div>
                  <button
                    className="flex items-center gap-2 px-4 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50"
                    onClick={addProject}
                  >
                    <Plus size={16} />
                    프로젝트 추가
                  </button>
                </div>

                {portfolioData.projects.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <Palette size={48} className="mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium mb-2">
                      아직 추가된 프로젝트가 없습니다.
                    </p>
                    <p className="text-sm">
                      프로젝트 추가 버튼을 클릭해서 시작하세요.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {portfolioData.projects.map((project, index) => (
                      <div
                        key={index}
                        className="p-4 border border-gray-200 rounded-lg"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              프로젝트명
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                              placeholder="프로젝트명"
                              value={project.name}
                              onChange={(e) => {
                                const newProjects = [...portfolioData.projects];
                                newProjects[index].name = e.target.value;
                                setPortfolioData((prev) => ({
                                  ...prev,
                                  projects: newProjects,
                                }));
                              }}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              링크
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                              placeholder="https://github.com/username/project"
                              value={project.link}
                              onChange={(e) => {
                                const newProjects = [...portfolioData.projects];
                                newProjects[index].link = e.target.value;
                                setPortfolioData((prev) => ({
                                  ...prev,
                                  projects: newProjects,
                                }));
                              }}
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              프로젝트 설명
                            </label>
                            <textarea
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                              rows={3}
                              placeholder="프로젝트의 목적, 기능, 성과 등을 설명하세요"
                              value={project.description}
                              onChange={(e) => {
                                const newProjects = [...portfolioData.projects];
                                newProjects[index].description = e.target.value;
                                setPortfolioData((prev) => ({
                                  ...prev,
                                  projects: newProjects,
                                }));
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 미리보기 */}
            {activeStep === 4 && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Eye size={24} className="text-purple-600 mr-2" />
                    <h2 className="text-2xl font-semibold">
                      포트폴리오 미리보기
                    </h2>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-50"
                      onClick={generateFullPortfolio}
                      disabled={isGenerating}
                    >
                      {isGenerating ? (
                        <RefreshCw size={16} className="animate-spin" />
                      ) : (
                        <Sparkles size={16} />
                      )}
                      {isGenerating ? '생성 중...' : 'AI로 완성하기'}
                    </button>
                    {generatedContent && (
                      <button
                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                        onClick={() => {
                          const blob = new Blob([generatedContent], {
                            type: 'text/html',
                          });
                          const url = URL.createObjectURL(blob);
                          const a = document.createElement('a');
                          a.href = url;
                          a.download = `${portfolioData.personalInfo.name || 'portfolio'}.html`;
                          a.click();
                          URL.revokeObjectURL(url);
                        }}
                      >
                        <Download size={16} />
                        HTML 다운로드
                      </button>
                    )}
                  </div>
                </div>

                {generatedContent ? (
                  <div className="space-y-6">
                    {/* 실제 HTML 미리보기 */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">
                          포트폴리오 미리보기
                        </span>
                        <button
                          className="text-sm text-purple-600 hover:text-purple-800"
                          onClick={() => {
                            const newWindow = window.open();
                            if (newWindow) {
                              newWindow.document.write(generatedContent);
                              newWindow.document.close();
                            }
                          }}
                        >
                          새 창에서 보기
                        </button>
                      </div>
                      <div className="bg-white">
                        <iframe
                          srcDoc={generatedContent}
                          style={{
                            width: '100%',
                            height: '400px',
                            border: 'none',
                          }}
                          title="Portfolio Preview"
                        />
                      </div>
                    </div>

                    {/* HTML 코드 보기 */}
                    <div className="border border-gray-200 rounded-lg">
                      <button
                        className="w-full px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between text-left hover:bg-gray-100"
                        onClick={() => setShowCodeAccordion(!showCodeAccordion)}
                      >
                        <span className="font-medium text-gray-700">
                          생성된 HTML 코드
                        </span>
                        <ChevronDown
                          size={20}
                          className={`text-gray-500 transition-transform ${showCodeAccordion ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {showCodeAccordion && (
                        <div className="p-4">
                          <div className="flex justify-end mb-3">
                            <button
                              className="flex items-center gap-2 px-3 py-1 text-sm border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                              onClick={() =>
                                navigator.clipboard.writeText(generatedContent)
                              }
                            >
                              <Copy size={16} />
                              코드 복사
                            </button>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg max-h-80 overflow-auto">
                            <pre className="text-xs text-gray-800 whitespace-pre-wrap font-mono">
                              {generatedContent}
                            </pre>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* 사용 가이드 */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h3 className="font-medium text-blue-900 mb-2">
                        💡 포트폴리오 사용 방법
                      </h3>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>
                          <strong>HTML 다운로드:</strong> 생성된 HTML 파일을
                          다운로드하여 웹 호스팅 서비스에 업로드
                        </li>
                        <li>
                          <strong>GitHub Pages:</strong> GitHub 저장소에
                          업로드하여 무료 호스팅 가능
                        </li>
                        <li>
                          <strong>Vercel/Netlify:</strong> 정적 사이트 호스팅
                          서비스 활용
                        </li>
                        <li>
                          <strong>커스터마이징:</strong> HTML/CSS 코드를
                          수정하여 개인화 가능
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <Sparkles size={64} className="mx-auto mb-4 opacity-50" />
                    <h3 className="text-xl font-semibold mb-2">
                      AI로 포트폴리오 완성하기
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      입력한 정보를 바탕으로 AI가 전문적인 포트폴리오를
                      생성해드립니다. 현대적인 디자인과 반응형 레이아웃이 적용된
                      완성된 HTML 파일을 받을 수 있습니다.
                    </p>

                    <button
                      className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 mx-auto"
                      onClick={generateFullPortfolio}
                      disabled={
                        isGenerating || !portfolioData.personalInfo.name
                      }
                    >
                      {isGenerating ? (
                        <RefreshCw size={20} className="animate-spin" />
                      ) : (
                        <Sparkles size={20} />
                      )}
                      {isGenerating ? '생성 중...' : '포트폴리오 생성하기'}
                    </button>

                    {!portfolioData.personalInfo.name && (
                      <p className="text-red-500 text-sm mt-3">
                        기본 정보의 이름을 먼저 입력해주세요.
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* 네비게이션 버튼 */}
        <div className="flex justify-between mt-8">
          {/* 이전 버튼 */}
          <button
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 disabled:opacity-50"
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
          >
            이전
          </button>

          {/* 다음 or 저장하기 버튼 */}
          {activeStep < steps.length - 1 ? (
            <button
              className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-50"
              onClick={() => {
                if (activeStep === 0 && !validateBasicInfo()) return; // 기본 정보 유효성 검사
                setActiveStep(Math.min(steps.length - 1, activeStep + 1)); // 다음 단계로 이동
              }}
            >
              다음
            </button>
          ) : generatedContent ? (
            <button
              className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              onClick={() => alert('포트폴리오 저장 완료!')}
            >
              저장하기
            </button>
          ) : null}
        </div>
      </div>
    </Layout>
  );
};

export default PortfolioBuilderPage;

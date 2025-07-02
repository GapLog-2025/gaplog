// GapReviewDetailSection.tsx (Enhanced Version)
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { sampleReviews } from './data/reviewList';
import NoDataContent from './ui/GapReviewDetail/NoDataContent';
import { MoveButton, EditButton, DeleteButton } from '@/components/Button';
import useHandleBack from './hook/handleBack';
import Tag from '@/components/Tag';
import { Card, CardHeader, CardContent } from '@/components/Card';
import formatDate from '@/utils/formatDate';

import { 
  Calendar, Star, StarOff, BookOpen, MapPin, Building, DollarSign, 
  TrendingUp, Clock, Award, ExternalLink, Eye, Heart, MessageCircle,
  Target, Lightbulb, AlertTriangle, BookmarkCheck, Download,
  Users, BarChart3, Zap
} from 'lucide-react';
import { BookmarkedButton } from '@/components/Button';
import { useAuthStore } from '@/stores/useAuthStore';

export default function GapReviewDetailSection() {
  const { id } = useParams();

  const reviewId = parseInt(id ?? '', 10);
  const review = sampleReviews.find((item) => item.gapReviewsId === reviewId);

  const [isBookmarked, setIsBookmarked] = useState(
    review ? review.bookmarked : false,
  );
  const handleback = useHandleBack();
  const { user } = useAuthStore();
  
  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };

  if (!review) {
    return <NoDataContent />;
  }

  const tags = [
    `공백기 ${review.gapPeriodMonths}개월`,
    `학점 ${review.grade}`,
  ];
  if (review.isMajor) {
    tags.push('전공자');
  } else {
    tags.push('비전공자');
  }
  const colorTypes = ['primary', 'skyblue', 'green'] as const;

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'education': return '📚';
      case 'project': return '💻';
      case 'experience': return '💼';
      case 'certification': return '🏆';
      case 'travel': return '✈️';
      case 'rest': return '🌱';
      case 'volunteer': return '🤝';
      case 'skill': return '⚡';
      default: return '📋';
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'education': return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'project': return 'bg-purple-50 border-purple-200 text-purple-800';
      case 'experience': return 'bg-green-50 border-green-200 text-green-800';
      case 'certification': return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'travel': return 'bg-indigo-50 border-indigo-200 text-indigo-800';
      case 'rest': return 'bg-gray-50 border-gray-200 text-gray-800';
      default: return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  return (
    <section className="w-full flex flex-col gap-6">
      {/* Header */}
      <div className="flex gap-4 items-center mb-2">
        <div className="bg-gd-point-main rounded-full flex justify-center items-center w-[32px] h-[32px]">
          <BookOpen className="text-white" />
        </div>
        <h1 className="typo-heading text-title pt-1">공백기 후기</h1>
      </div>

      {/* Navigation & Actions */}
      <div className="flex justify-between items-center">
        <MoveButton onClick={handleback}>뒤로가기</MoveButton>
        {user?.name === review.userName && (
          <div className="flex gap-3">
            <EditButton />
            <DeleteButton />
          </div>
        )}
      </div>

      {/* Main Content Card */}
      <Card className="p-8">
        <CardHeader className="flex flex-col gap-4">
          {/* User Profile Section */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                {review.userName.charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{review.userName}</h3>
                {review.userProfile?.bio && (
                  <p className="text-gray-600">{review.userProfile.bio}</p>
                )}
                <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                  {review.userProfile?.location && (
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{review.userProfile.location}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{formatDate(review.createdAt)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats & Bookmark */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Eye size={16} />
                  <span>{review.views?.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart size={16} />
                  <span>{review.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle size={16} />
                  <span>{review.comments}</span>
                </div>
              </div>
              <BookmarkedButton
                isBookmarked={isBookmarked}
                onClick={toggleBookmark}
              >
                <div className="flex justify-center items-center gap-2">
                  {isBookmarked ? <Star size={20} /> : <StarOff size={20} />}
                  <p>{isBookmarked ? '즐겨찾기 해제' : '즐겨찾기'}</p>
                </div>
              </BookmarkedButton>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((content, index) => (
              <Tag key={index} type={colorTypes[index]} label={content} />
            ))}
            {review.tags?.map((tag, index) => (
              <span key={`hashtag-${index}`} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">
                #{tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">{review.title}</h1>
        </CardHeader>

        <CardContent className="space-y-8 py-8">
          {/* Summary Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Target className="text-blue-600" size={24} />
              공백기 여정 요약
            </h2>
            
            {/* Before Gap */}
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
              <h3 className="font-semibold text-blue-900 mb-2">공백기 이전</h3>
              <p className="text-gray-700">{review.summary.beforeGap}</p>
            </div>

            {/* During Gap - Activities Timeline */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                <Clock className="text-green-600" size={20} />
                공백기 주요 활동
              </h3>
              <div className="space-y-4">
                {review.summary.duringGap.map((activity, index) => (
                  <div key={index} className={`rounded-lg p-5 border ${getActivityColor(activity.type)}`}>
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">{getActivityIcon(activity.type)}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-lg">{activity.label}</h4>
                          <span className="text-sm font-medium px-3 py-1 bg-white rounded-full">
                            {activity.duration}
                          </span>
                        </div>
                        {activity.platform && (
                          <p className="text-sm font-medium mb-2">📍 {activity.platform}</p>
                        )}
                        <p className="text-gray-700 mb-3">{activity.description}</p>
                        
                        {activity.skills && activity.skills.length > 0 && (
                          <div className="mb-3">
                            <p className="text-sm font-medium mb-2">🔧 습득 스킬</p>
                            <div className="flex flex-wrap gap-2">
                              {activity.skills.map((skill, skillIndex) => (
                                <span 
                                  key={skillIndex}
                                  className="px-2 py-1 bg-white text-gray-700 text-sm rounded-md border"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {activity.achievement && (
                          <div className="flex items-center gap-2 text-sm font-medium">
                            <Award size={16} className="text-yellow-600" />
                            <span className="text-gray-800">{activity.achievement}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* After Gap */}
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
              <h3 className="font-semibold text-green-900 mb-2">공백기 이후</h3>
              <p className="text-gray-700">{review.summary.afterGap}</p>
            </div>
          </div>

          {/* Job Result Section */}
          {review.jobResult && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <TrendingUp className="text-green-600" size={24} />
                취업 성공 결과
              </h2>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Building className="text-green-600" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">회사</p>
                        <p className="font-semibold text-gray-900">{review.jobResult.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="text-green-600" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">직책</p>
                        <p className="font-semibold text-gray-900">{review.jobResult.position}</p>
                      </div>
                    </div>
                    {review.jobResult.salary && (
                      <div className="flex items-center gap-3">
                        <DollarSign className="text-green-600" size={20} />
                        <div>
                          <p className="text-sm text-gray-600">연봉</p>
                          <p className="font-semibold text-gray-900">{review.jobResult.salary}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <BarChart3 className="text-green-600" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">지원 현황</p>
                        <p className="font-semibold text-gray-900">
                          지원 {review.jobResult.applicationCount}회 • 면접 {review.jobResult.interviewCount}회
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="text-green-600" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">소요 기간</p>
                        <p className="font-semibold text-gray-900">{review.jobResult.timeline}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Budget Section */}
          {review.budget && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <DollarSign className="text-blue-600" size={24} />
                투자 비용 분석
              </h2>
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-gray-900">총 투자 비용</span>
                  <span className="text-2xl font-bold text-blue-600">
                    {review.budget.total.toLocaleString()}원
                  </span>
                </div>
                <div className="space-y-3">
                  {review.budget.breakdown.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{item.category}</p>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                      <span className="font-semibold text-gray-900">
                        {item.amount.toLocaleString()}원
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Learning Tools */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Zap className="text-purple-600" size={24} />
              활용한 학습 도구
            </h2>
            <div className="flex flex-wrap gap-3">
              {review.learningTools.map((tool, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-purple-100 text-purple-800 rounded-lg font-medium hover:bg-purple-200 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Difficulties */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <AlertTriangle className="text-red-600" size={24} />
              어려웠던 점
            </h2>
            <div className="space-y-3">
              {review.difficulties.map((difficulty, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                  <span className="text-red-600 mt-1">⚠️</span>
                  <p className="text-gray-700 flex-1">{difficulty}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Insights */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Lightbulb className="text-yellow-600" size={24} />
              얻은 인사이트
            </h2>
            <div className="space-y-3">
              {review.insights.map((insight, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                  <span className="text-yellow-600 mt-1">💡</span>
                  <p className="text-gray-700 flex-1">{insight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Advice */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <BookmarkCheck className="text-indigo-600" size={24} />
              후배들에게 한마디
            </h2>
            <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-400">
              <p className="text-gray-700 text-lg leading-relaxed italic">
                "{review.advice}"
              </p>
            </div>
          </div>

          {/* Attachments */}
          {review.attachments && review.attachments.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <ExternalLink className="text-gray-600" size={24} />
                첨부 자료
              </h2>
              <div className="space-y-3">
                {review.attachments.map((attachment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        {attachment.type === 'portfolio' && '📁'}
                        {attachment.type === 'certificate' && '🏆'}
                        {attachment.type === 'project' && '💻'}
                        {attachment.type === 'resume' && '📄'}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{attachment.title}</p>
                        {attachment.description && (
                          <p className="text-sm text-gray-600">{attachment.description}</p>
                        )}
                      </div>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Download size={16} />
                      <span>다운로드</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
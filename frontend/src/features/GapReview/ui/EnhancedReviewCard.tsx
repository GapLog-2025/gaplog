// ui/EnhancedReviewCard.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '@/components/Card';
import Tag from '@/components/Tag';
import { 
  Calendar, Eye, Heart, MessageCircle, Clock, DollarSign, Star, 
  MapPin, Building, TrendingUp, Award, ExternalLink
} from 'lucide-react';
import formatDate from '@/utils/formatDate';

// 타입 정의 (임시로 파일 내부에 정의)
interface UserProfile {
  avatar?: string;
  bio?: string;
  location?: string;
  linkedIn?: string;
  github?: string;
}

interface GapActivity {
  label: string;
  type: 'education' | 'project' | 'experience' | 'skill' | 'certification' | 'volunteer' | 'travel' | 'rest';
  duration: string;
  platform?: string;
  description?: string;
  skills?: string[];
  achievement?: string;
}

interface GapReview {
  gapReviewsId: number;
  title: string;
  userName: string;
  userProfile?: UserProfile;
  category: string;
  major: string;
  isMajor: boolean;
  grade: number;
  gapPeriodMonths: number;
  bookmarked: boolean;
  createdAt: string;
  views?: number;
  likes?: number;
  comments?: number;
  tags?: string[];
  summary: {
    beforeGap: string;
    duringGap: GapActivity[];
    afterGap: string;
  };
  budget?: {
    total: number;
    breakdown: Array<{
      category: string;
      amount: number;
      description: string;
    }>;
  };
  jobResult?: {
    company: string;
    position: string;
    salary?: string;
    applicationCount: number;
    interviewCount: number;
    timeline: string;
  };
  attachments?: Array<{
    type: string;
    title: string;
    url: string;
    description?: string;
  }>;
}

interface EnhancedReviewCardProps {
  review: GapReview;
  type: 'primary' | 'skyblue' | 'yellow' | 'green';
  onBookmarkToggle?: () => void;
}

export default function EnhancedReviewCard({ review, type, onBookmarkToggle }: EnhancedReviewCardProps) {
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(review.bookmarked);

  const tags = [
    `공백기 ${review.gapPeriodMonths}개월`,
    `학점 ${review.grade}`,
    review.isMajor ? '전공자' : '비전공자'
  ];

  const colorTypes = ['primary', 'skyblue', 'green'] as const;

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
    onBookmarkToggle?.();
  };

  const handleCardClick = () => {
    navigate(`/gap-review/${review.gapReviewsId}`);
  };

  const getActivityTypeIcon = (activityType: string) => {
    switch (activityType) {
      case 'education': return '📚';
      case 'project': return '💻';
      case 'experience': return '💼';
      case 'certification': return '🏆';
      case 'travel': return '✈️';
      case 'rest': return '🌱';
      default: return '📋';
    }
  };

  const getBorderColor = () => {
    switch (type) {
      case 'primary': return 'border-l-blue-500';
      case 'skyblue': return 'border-l-sky-400';
      case 'yellow': return 'border-l-yellow-500';
      case 'green': return 'border-l-green-500';
      default: return 'border-l-gray-400';
    }
  };

  return (
      <div 
        className={`hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 ${getBorderColor()} hover:scale-[1.02] rounded-lg`}
        onClick={handleCardClick}
    >
    <Card className="border-0 shadow-none">
      <CardHeader className="space-y-4">
        {/* 상단 사용자 정보 및 메타데이터 */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            {/* 사용자 아바타 */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
              {review.userName.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-gray-900">{review.userName}</p>
                {review.userProfile?.location && (
                  <>
                    <span className="text-gray-300">•</span>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <MapPin size={12} />
                      <span>{review.userProfile.location}</span>
                    </div>
                  </>
                )}
              </div>
              <p className="text-sm text-gray-500">{review.userProfile?.bio}</p>
            </div>
          </div>
          
          {/* 메타 정보 */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Eye size={16} />
              <span>{review.views?.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart size={16} className={review.likes && review.likes > 50 ? 'text-red-500' : ''} />
              <span>{review.likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={16} />
              <span>{review.comments}</span>
            </div>
            {/* BookmarkedButton 대신 일반 버튼 사용 */}
            <button
              onClick={handleBookmarkClick}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isBookmarked ? (
                <Star size={16} className="text-yellow-500 fill-current" />
              ) : (
                <Star size={16} className="text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {/* 태그들 */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Tag key={index} type={colorTypes[index]} label={tag} />
          ))}
          {review.tags?.slice(0, 3).map((tag, index) => (
            <Tag key={`hashtag-${index}`} type="primary" label={`#${tag}`} />
          ))}
        </div>

        {/* 제목 */}
        <h2 className="text-xl font-bold text-gray-900 hover:text-primary transition-colors overflow-hidden text-ellipsis">
          {review.title}
        </h2>

        {/* 날짜 정보 */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar size={16} />
          <span>{formatDate(review.createdAt)}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* 공백기 활동 하이라이트 */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Clock size={16} />
            <span>공백기 주요 활동</span>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {review.summary.duringGap.slice(0, 3).map((activity, index) => (
              <div key={index} className="flex items-center gap-3 p-2 bg-white rounded-lg shadow-sm">
                <span className="text-lg">{getActivityTypeIcon(activity.type)}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{activity.label}</p>
                  <p className="text-xs text-gray-600">{activity.duration}</p>
                </div>
                {activity.achievement && (
                  <div className="flex items-center gap-1 text-xs text-green-600">
                    <Award size={12} />
                    <span className="hidden sm:inline">성과</span>
                  </div>
                )}
              </div>
            ))}
            {review.summary.duringGap.length > 3 && (
              <div className="text-center py-2">
                <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  +{review.summary.duringGap.length - 3}개 활동 더보기
                </span>
              </div>
            )}
          </div>
        </div>

        {/* 취업 결과 */}
        {review.jobResult && (
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
            <div className="flex items-center gap-2 text-green-800 font-semibold text-sm mb-3">
              <TrendingUp size={16} />
              <span>취업 성공</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Building size={14} className="text-green-600" />
                <span className="text-sm font-medium text-gray-900">{review.jobResult.company}</span>
                <span className="text-xs text-gray-500">•</span>
                <span className="text-sm text-gray-700">{review.jobResult.position}</span>
              </div>
              {review.jobResult.salary && (
                <div className="flex items-center gap-2">
                  <DollarSign size={14} className="text-green-600" />
                  <span className="text-sm text-gray-700">연봉 {review.jobResult.salary}</span>
                </div>
              )}
              <div className="flex items-center gap-4 text-xs text-gray-600">
                <span>지원 {review.jobResult.applicationCount}회</span>
                <span>면접 {review.jobResult.interviewCount}회</span>
                <span>기간 {review.jobResult.timeline}</span>
              </div>
            </div>
          </div>
        )}

        {/* 예산 정보 */}
        {review.budget && (
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <DollarSign size={16} />
                <span>총 투자 비용</span>
              </div>
              <span className="text-lg font-bold text-blue-600">
                {review.budget.total.toLocaleString()}원
              </span>
            </div>
          </div>
        )}

        {/* 핵심 스킬 */}
        {review.summary.duringGap.some(activity => activity.skills && activity.skills.length > 0) && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">습득 스킬</p>
            <div className="flex flex-wrap gap-1">
              {Array.from(new Set(
                review.summary.duringGap
                  .flatMap(activity => activity.skills || [])
                  .slice(0, 6)
              )).map((skill, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 첨부 파일 */}
        {review.attachments && review.attachments.length > 0 && (
          <div className="border-t pt-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <ExternalLink size={14} />
              <span>첨부 자료 {review.attachments.length}개</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
        </div>
  );
}
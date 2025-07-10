import { type GapReview } from '@/types/gapReview';

export function filterReviewsByTags(
  reviews: GapReview[],
  selectedTags: string[],
): GapReview[] {
  const categoryTags = [
    'IT/개발',
    '디자인',
    '마케팅/광고',
    '경영/사무',
    '무역/유통',
    '영업',
    '생산/제조',
    '건설',
    '금융',
  ];
  const majorTags = ['전공자', '비전공자'];
  const gapPeriodTags = ['6개월 이하', '1년 이하', '3년 이하'];
  const gradeTags = ['2.0이하', '2.5이상', '3.0이상', '3.5이상', '4.0이상'];

  return reviews.filter((review) => {
    // 전공자 필터
    const majorFilter = selectedTags.filter((tag) => majorTags.includes(tag));
    if (majorFilter.length > 0) {
      const isMatch = majorFilter.some((tag) => {
        return tag === '전공자'
          ? review.isMajor === true
          : review.isMajor === false;
      });
      if (!isMatch) return false;
    }

    // 공백기간 필터
    const gapFilter = selectedTags.filter((tag) => gapPeriodTags.includes(tag));
    if (gapFilter.length > 0) {
      const isMatch = gapFilter.some((tag) => {
        if (tag === '6개월 이하') return review.gapPeriodMonths <= 6;
        if (tag === '1년 이하') return review.gapPeriodMonths <= 12;
        if (tag === '3년 이하') return review.gapPeriodMonths <= 36;
        return false; // ✅ fallback 꼭 필요!
      });
      if (!isMatch) return false;
    }

    // 학점 필터
    const gradeFilter = selectedTags.filter((tag) => gradeTags.includes(tag));
    if (gradeFilter.length > 0) {
      const isMatch = gradeFilter.some((tag) => {
        if (tag === '2.0이하') return review.grade <= 2.0;
        if (tag === '2.5이상') return review.grade >= 2.5;
        if (tag === '3.0이상') return review.grade >= 3.0;
        if (tag === '3.5이상') return review.grade >= 3.5;
        if (tag === '4.0이상') return review.grade >= 4.0;
        return false;
      });
      if (!isMatch) return false;
    }

    // 카테고리 필터
    const categoryFilter = selectedTags.filter((tag) =>
      categoryTags.includes(tag),
    );
    if (categoryFilter.length > 0) {
      const isMatch = categoryFilter.some((tag) => {
        const result =
          tag.trim().toLowerCase() === review.category.trim().toLowerCase();
        console.log(`🟡 비교 중: ${tag} vs ${review.category} → ${result}`);
        return result;
      });
      if (!isMatch) return false;
    }

    return true; // 모든 조건 통과
  });
}

export function matchReviewByKeyword(
  review: GapReview,
  keyword: string,
): boolean {
  const lowered = keyword.toLowerCase();

  const basicMatch =
    review.title.toLowerCase().includes(lowered) ||
    // review.content.toLowerCase().includes(lowered) ||
    review.major.toLowerCase().includes(lowered) ||
    review.userName.toLowerCase().includes(lowered);

  const gradeMatch = lowered.includes('학점')
    ? (lowered.includes('2.0') && review.grade >= 2.0) ||
      (lowered.includes('2.5') && review.grade >= 2.5) ||
      (lowered.includes('3.0') && review.grade >= 3.0) ||
      (lowered.includes('3.5') && review.grade >= 3.5) ||
      (lowered.includes('4.0') && review.grade >= 4.0)
    : false;

  // 공백기 키워드 매칭
  let gapMatch = false;
  const gapRegex = /공백\w*\D*(\d+)\s*개월?/;
  const gapMatchResult = lowered.match(gapRegex);
  console.log(gapMatchResult);
  if (gapMatchResult) {
    const targetMonths = parseInt(gapMatchResult[1], 10);
    console.log(targetMonths);
    if (!isNaN(targetMonths)) {
      gapMatch = review.gapPeriodMonths === targetMonths;
    }
  }

  // (2) 기존 태그 필터처럼 일반 키워드로 매칭도 함께 처리
  if (!gapMatch) {
    gapMatch =
      (lowered.includes('6개월') && review.gapPeriodMonths <= 6) ||
      (lowered.includes('1년') && review.gapPeriodMonths <= 12) ||
      (lowered.includes('3년') && review.gapPeriodMonths <= 36);
  }

  return basicMatch || gradeMatch || gapMatch;
}

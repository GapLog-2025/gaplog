package com.gaplog.gapreview.mapper;

import com.gaplog.gapreview.domain.GapReview;
import com.gaplog.gapreview.dto.GapReviewSearchCondition;
import io.lettuce.core.dynamic.annotation.Param;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Set;

@Mapper
public interface GapReviewMapper {
    void insertReview(@Param("review") GapReview review);
    List<GapReview> search(@Param("cond") GapReviewSearchCondition cond);

    void insertBookmark(@Param("userId") Long userId, @Param("reviewId") Long reviewId);
    void deleteBookmark(@Param("userId") Long userId, @Param("reviewId") Long reviewId);
    Set<Long> findBookmarkedReviewIdsByUserId(@Param("userId") Long userId);

    List<GapReview> findBookmarkedReviews(@Param("userId") Long userId);
}

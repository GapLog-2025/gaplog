package com.gaplog.gapreview.service;

import com.gaplog.gapreview.dto.*;

import java.util.List;

public interface GapReviewService {
    void writeReview(Long userId, GapReviewRequestDTO dto);
    List<GapReviewResponseDTO> searchReviews(GapReviewSearchCondition cond, Long userId);
    void addBookmark(Long userId, Long reviewId);
    void removeBookmark(Long userId, Long reviewId);
    List<GapReviewResponseDTO> getBookmarkedReviews(Long userId);

    List<GapReviewResponseDTO> getAllOrderByBookmarkCount(Long userId);
    List<GapReviewResponseDTO> getMyReviews(Long userId);
    GapReviewResponseDTO getReviewDetail(Long userId, Long reviewId);
}

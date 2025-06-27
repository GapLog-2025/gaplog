package com.gaplog.gapreview.service;

import com.gaplog.gapreview.domain.GapReview;
import com.gaplog.gapreview.dto.*;
import com.gaplog.gapreview.mapper.GapReviewMapper;
import com.gaplog.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.gaplog.user.mapper.UserMapper;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class GapReviewServiceImpl implements GapReviewService {

    private final GapReviewMapper mapper;
    private final UserMapper userMapper;
    @Override
    public void writeReview(Long userId, GapReviewRequestDTO dto) {
        GapReview review = GapReview.builder()
                .userId(userId)
                .title(dto.getTitle())
                .major(dto.getMajor())
                .content(dto.getContent())
                .grade(dto.getGrade())
                .gapPeriodMonths(dto.getGapPeriodMonths())
                .isMajor(dto.getIsMajor())
                .build();
        mapper.insertReview(review);
    }





    @Override
    public List<GapReviewResponseDTO> searchReviews(GapReviewSearchCondition cond, Long userId) {
        // 조건에 맞는 리뷰 목록 조회
        List<GapReview> reviews = mapper.search(cond);

        // 북마크된 리뷰 ID 조회
        Set<Long> bookmarkedIds = mapper.findBookmarkedReviewIdsByUserId(userId);

        return reviews.stream()
                .map(review -> {
                    String username = userMapper.findByUserId(review.getUserId()).getName();
                    boolean isBookmarked = bookmarkedIds.contains(review.getGapReviewsId());
                    return GapReviewResponseDTO.of(review, username, isBookmarked);
                })
                .collect(Collectors.toList());
    }

    @Override
    public void addBookmark(Long userId, Long reviewId) {
        mapper.insertBookmark(userId, reviewId);
    }

    @Override
    public void removeBookmark(Long userId, Long reviewId) {
        mapper.deleteBookmark(userId, reviewId);
    }



    @Override
    public List<GapReviewResponseDTO> getBookmarkedReviews(Long userId) {
        List<GapReview> reviews = mapper.findBookmarkedReviews(userId);
        return reviews.stream()
                .map(review -> {
                    String username = userMapper.findByUserId(review.getUserId()).getName();
                    return GapReviewResponseDTO.of(review, username, true);
                })
                .collect(Collectors.toList());
    }

    @Override
    public List<GapReviewResponseDTO> getAllOrderByBookmarkCount(Long userId) {
        List<GapReview> reviews = mapper.findAllOrderByBookmarkCount();
        Set<Long> bookmarkedIds = mapper.findBookmarkedReviewIdsByUserId(userId);
        return reviews.stream()
                .map(review -> {
                    String username = userMapper.findByUserId(review.getUserId()).getName();
                    boolean isBookmarked = bookmarkedIds.contains(review.getGapReviewsId());
                    int bookmarkCount = mapper.countBookmarks(review.getGapReviewsId()); // ✅ 추가
                    return GapReviewResponseDTO.builder()
                            .gapReviewsId(review.getGapReviewsId())
                            .title(review.getTitle())
                            .major(review.getMajor())
                            .content(review.getContent())
                            .grade(review.getGrade())
                            .gapPeriodMonths(review.getGapPeriodMonths())
                            .userName(username)
                            .createdAt(review.getCreatedAt().toLocalDateTime())
                            .bookmarked(isBookmarked)
                            .isMajor(review.getIsMajor())
                            .bookmarkCount(bookmarkCount)
                            .build();
                }).collect(Collectors.toList());
    }

    @Override
    public List<GapReviewResponseDTO> getMyReviews(Long userId) {
        List<GapReview> reviews = mapper.findByUserId(userId);
        Set<Long> bookmarkedIds = mapper.findBookmarkedReviewIdsByUserId(userId);

        return reviews.stream()
                .map(review -> {
                    String username = userMapper.findByUserId(userId).getName();
                    boolean isBookmarked = bookmarkedIds.contains(review.getGapReviewsId());
                    int bookmarkCount = mapper.countBookmarks(review.getGapReviewsId()); // ✅ 추가
                    return GapReviewResponseDTO.builder()
                            .gapReviewsId(review.getGapReviewsId())
                            .title(review.getTitle())
                            .major(review.getMajor())
                            .content(review.getContent())
                            .grade(review.getGrade())
                            .gapPeriodMonths(review.getGapPeriodMonths())
                            .userName(username)
                            .createdAt(review.getCreatedAt().toLocalDateTime())
                            .bookmarked(isBookmarked)
                            .isMajor(review.getIsMajor())
                            .bookmarkCount(bookmarkCount)
                            .build();
                }).collect(Collectors.toList());
    }

    @Override
    public GapReviewResponseDTO getReviewDetail(Long userId, Long reviewId) {
        GapReview review = mapper.findByReviewId(reviewId);
        String username = userMapper.findByUserId(review.getUserId()).getName();
        Set<Long> bookmarkedIds = mapper.findBookmarkedReviewIdsByUserId(userId);
        int bookmarkCount = mapper.countBookmarks(reviewId); // ✅ 추가

        return GapReviewResponseDTO.builder()
                .gapReviewsId(review.getGapReviewsId())
                .title(review.getTitle())
                .major(review.getMajor())
                .content(review.getContent())
                .grade(review.getGrade())
                .gapPeriodMonths(review.getGapPeriodMonths())
                .userName(username)
                .createdAt(review.getCreatedAt().toLocalDateTime())
                .bookmarked(bookmarkedIds.contains(reviewId))
                .isMajor(review.getIsMajor())
                .bookmarkCount(bookmarkCount)
                .build();
    }
}

package com.gaplog.gapreview.dto;

import com.gaplog.gapreview.domain.GapReview;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;


import java.time.LocalDateTime;

@Getter
@Setter
@Builder
public class GapReviewResponseDTO {
    private Long gapReviewsId;
    private String title;
    private String major;
    private String content;
    private Double grade;
    private Integer gapPeriodMonths;
    private String userName;
    private boolean bookmarked;
    private LocalDateTime createdAt;
    private Boolean isMajor;
    private int bookmarkCount;


    public static GapReviewResponseDTO of(GapReview review, String username, boolean bookmarked) {
        return GapReviewResponseDTO.builder()
                .gapReviewsId(review.getGapReviewsId())
                .title(review.getTitle())
                .major(review.getMajor())
                .content(review.getContent())
                .grade(review.getGrade())
                .gapPeriodMonths(review.getGapPeriodMonths())
                .userName(username)
                .createdAt(review.getCreatedAt().toLocalDateTime())
                .bookmarked(bookmarked)
                .isMajor(review.getIsMajor())
                .build();
    }



}

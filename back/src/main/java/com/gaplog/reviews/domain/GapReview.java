package com.gaplog.reviews.domain;

import lombok.Data;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
public class GapReview {
    private Long gapReviewsId;
    private Long userId;
    private String title;
    private String major;
    private String content;
    private Float grade;
    private LocalDate gapPeriod;
    private LocalDateTime createdAt;
}

package com.gaplog.gapreview.domain;

import lombok.*;

import java.sql.Timestamp;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GapReview {
    private Long gapReviewsId;
    private Long userId;
    private String title;
    private String major;
    private String content;
    private Timestamp createdAt;
    private Double grade;
    private Integer gapPeriodMonths;
    private Boolean isMajor;
}






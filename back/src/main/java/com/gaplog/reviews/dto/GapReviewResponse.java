package com.gaplog.reviews.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class GapReviewResponse {
    private Long gapReviewsId;
    private String title;
    private String major;
    private String content;
    private Float grade;
    private String gapPeriod;
    private LocalDateTime createdAt;
    private String username; // User 테이블에서 가져온 이름 또는 닉네임 등
}

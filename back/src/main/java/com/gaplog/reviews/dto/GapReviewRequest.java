package com.gaplog.reviews.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
public class GapReviewRequest {
    @Schema(description = "제목", example = "나의 SSAFY 후기")
    private String title;

    @Schema(description = "전공", example = "컴퓨터공학")
    private String major;

    @Schema(description = "후기 내용", example = "정말 좋은 경험이었어요")
    private String content;

    @Schema(description = "학점", example = "3.7")
    private Float grade;

    @Schema(description = "공백기간", example = "2024-01-01")
    private String gapPeriod; // String으로 받아서 LocalDate로 변환 예정
}

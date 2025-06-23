package com.gaplog.gapreview.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class GapReviewRequestDTO {
    @Schema(description = "후기 제목", example = "6개월 동안 이렇게 준비했어요")
    private String title;

    @Schema(description = "전공 또는 직무 분야", example = "경제학과")
    private String major;

    @Schema(description = "후기 본문 내용", example = "저는 졸업 후 6개월간 공백기를 갖고 백엔드 개발을 준비했습니다...")
    private String content;

    @Schema(description = "학점", example = "3.75")
    private Double grade;

    @Schema(description = "공백기 기간 (개월 수)", example = "6")
    private Integer gapPeriodMonths;
}

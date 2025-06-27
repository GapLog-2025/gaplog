package com.gaplog.gapreview.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GapReviewSearchCondition {
    private String major;           // 직무 (IT/개발 등)
    private Boolean isMajor;        // 전공자 여부
    private Integer maxGapMonths;   // 공백기간 최대값
}

package com.gaplog.gapreview.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GapReviewSearchCondition {
    private String major;
    private Double minGrade;
    private Integer minGapPeriodMonths;
}

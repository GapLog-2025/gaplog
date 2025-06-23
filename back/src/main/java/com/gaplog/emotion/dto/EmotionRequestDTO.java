package com.gaplog.emotion.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EmotionRequestDTO {

    @Schema(example = "기쁨", description = "감정 상태 (기쁨, 슬픔, 평온, 불안, 화남)")
    private String emotion;

    @Schema(example = "오늘은 정말 행복한 하루였다!", description = "감정에 대한 상세한 내용")
    private String content;

    @Schema(example = "2025-06-24", description = "감정이 기록된 날짜")
    private Date date;

    @Schema(example = "맑음", description = "날씨 정보")
    private String weather;

    @Schema(example = "480", description = "수면 시간 (분 단위)")
    private Integer sleeptime;
}

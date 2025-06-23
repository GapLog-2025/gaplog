package com.gaplog.emotion.dto;

import lombok.*;

import java.sql.Date;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EmotionResponseDTO {
    private Long emotionsId;
    private String emotion;
    private String content;
    private Date date;
    private String weather;
    private Integer sleeptime;
    private LocalDateTime createdAt;
}

package com.gaplog.emotion.domain;

import lombok.*;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DayEmotion {
    private Long emotionsId;
    private Long userId;
    private String emotion; // ENUM 대신 String 처리 후 검증
    private String content;
    private Date date;
    private String weather;
    private Integer sleeptime;
    private LocalDateTime createdAt;
}

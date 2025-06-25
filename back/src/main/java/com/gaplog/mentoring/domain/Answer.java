package com.gaplog.mentoring.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Answer {
    private Long answerId;
    private Long questionId;
    private Long userId;
    private String content;
    private LocalDateTime createdAt;
}

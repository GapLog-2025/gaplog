package com.gaplog.mentoring.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Question {
    private Long questionId;
    private Long userId;
    private String title;
    private String content;
    private LocalDateTime createdAt;
    private List<Tag> tags;
}

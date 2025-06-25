package com.gaplog.mentoring.dto;


import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Builder
public class QuestionResponseDTO {
    private Long questionId;
    private String title;
    private String content;
    private String author;
    private LocalDateTime createdAt;
    private int likeCount;
    private List<String> tags;

    // 👇 명시적 public 생성자 추가
    public QuestionResponseDTO(Long questionId, String title, String content, String author,
                               LocalDateTime createdAt, int likeCount ,List<String> tags) {
        this.questionId = questionId;
        this.title = title;
        this.content = content;
        this.author = author;
        this.createdAt = createdAt;
        this.likeCount=likeCount;
        this.tags = tags;
    }

    public QuestionResponseDTO(Long questionId, String title, String content,
                                List<String> tagsByQuestionId) {
        this.questionId = questionId;
        this.title = title;
        this.content = content;
        this.tags = tagsByQuestionId;
    }



}

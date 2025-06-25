package com.gaplog.mentoring.dto;



import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerResponseDTO {
    private Long answerId;
    private String content;
    private String author;
    private LocalDateTime createdAt;

    // 👇 public 생성자 명시
    public AnswerResponseDTO(Long answerId, String content, String author, LocalDateTime createdAt) {
        this.answerId = answerId;
        this.content = content;
        this.author = author;
        this.createdAt = createdAt;
    }

    // 필요에 따라 오버로드된 생성자도 명시적으로 추가 가능
    public AnswerResponseDTO(Long answerId, String content) {
        this.answerId = answerId;
        this.content = content;
    }
}

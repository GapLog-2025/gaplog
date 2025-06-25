package com.gaplog.mentoring.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Getter
@Setter
@NoArgsConstructor // 🔹 Jackson 역직렬화를 위해 기본 생성자 추가
public class AnswerRequestDTO {
    private String content;

    @Builder
    public AnswerRequestDTO(String content) {
        this.content = content;
    }
}

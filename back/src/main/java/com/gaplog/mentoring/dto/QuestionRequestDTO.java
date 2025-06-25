package com.gaplog.mentoring.dto;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class QuestionRequestDTO {

    @Schema(example = "면접에서 자주 나오는 질문은?")
    private String title;

    @Schema(example = "면접 준비 중인데 자주 나오는 질문과 그에 대한 팁을 알고 싶습니다.")
    private String content;

    @Schema(example = "[\"면접\", \"취업\"]")
    private List<String> tags;
}
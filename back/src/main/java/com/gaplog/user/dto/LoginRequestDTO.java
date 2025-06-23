package com.gaplog.user.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginRequestDTO {
    @Schema(description = "이메일", example = "ssh2957@naver.com")
    private String email;
    @Schema(description = "비번", example = "1234")
    private String password;


}

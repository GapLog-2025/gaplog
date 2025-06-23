package com.gaplog.user.dto;

import lombok.Data;

@Data
public class UserDTO {
    private Long userId;
    private String email;
    private String password;
    private String name;
    private String role; // user 또는 mentor
    private String job;
}
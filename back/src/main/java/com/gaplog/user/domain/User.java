package com.gaplog.user.domain;

import lombok.*;

import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private Long userId;
    private String email;
    private String password;
    private String name;
    private String role;
    private String job;
    private Timestamp createdAt;
}

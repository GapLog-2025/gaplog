package com.gaplog.user.controller;

import com.gaplog.jwt.JwtUtil;
import com.gaplog.token.TokenService;
import com.gaplog.user.dto.LoginRequestDTO;
import com.gaplog.user.dto.LoginResponseDTO;
import com.gaplog.user.dto.UserDTO;
import com.gaplog.user.dto.UserUpdateDTO;
import com.gaplog.user.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.util.StringUtils;

@SecurityRequirement(name = "bearerAuth")
@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;
    private final TokenService tokenService;
    private final JwtUtil jwtUtil;

    public UserController(UserService userService, TokenService tokenService, JwtUtil jwtUtil) {
        this.userService = userService;
        this.tokenService = tokenService;
        this.jwtUtil = jwtUtil;
    }

    @Operation(summary = "회원가입")
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserDTO userDTO) {
        userService.register(userDTO);
        return ResponseEntity.ok("회원가입 성공");
    }

    @Operation(summary = "로그인")
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDTO request) {
        LoginResponseDTO response = userService.login(request.getEmail(), request.getPassword());

        // ✅ 로그인된 토큰 Redis에 저장
        tokenService.saveToken(response.getToken());

        return ResponseEntity.ok(response);
    }

    @Operation(summary = "로그아웃")
    @PostMapping("/logout")
    public ResponseEntity<?> logout(@RequestHeader("Authorization") String bearerToken) {
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            String token = bearerToken.substring(7);
            tokenService.deleteToken(token);  // ✅ Redis에서 삭제
            return ResponseEntity.ok("로그아웃 완료");
        }
        return ResponseEntity.badRequest().body("토큰이 없습니다");
    }

    @PutMapping("/update")
    @Operation(summary = "회원 정보 수정")
    public ResponseEntity<?> updateUser(@RequestBody UserUpdateDTO dto,
                                        @AuthenticationPrincipal com.gaplog.security.UserDetailsImpl userDetails) {
        String email = userDetails.getEmail();
        userService.updateUser(email, dto);
        return ResponseEntity.ok("회원 정보가 수정되었습니다.");
    }
}

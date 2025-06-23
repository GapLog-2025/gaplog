package com.gaplog.user.controller;

import com.gaplog.jwt.JwtUtil;
import com.gaplog.security.UserDetailsImpl;
import com.gaplog.token.TokenService;
import com.gaplog.user.dto.LoginRequestDTO;
import com.gaplog.user.dto.LoginResponseDTO;
import com.gaplog.user.dto.UserDTO;
import com.gaplog.user.dto.UserUpdateDTO;
import com.gaplog.user.service.UserService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@SecurityRequirement(name = "bearerAuth")
public class UserController {

    private final UserService userService;
    private final JwtUtil jwtUtil;
    private final TokenService tokenService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserDTO userDTO) {
        userService.register(userDTO);
        return ResponseEntity.ok("회원가입 성공");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDTO request) {
        LoginResponseDTO response = userService.login(request.getEmail(), request.getPassword());
        tokenService.saveToken(response.getToken(), response.getRole(), response.getUserId());
        return ResponseEntity.ok(response);
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(@AuthenticationPrincipal UserDetailsImpl userDetails, HttpServletRequest request) {
        String token = request.getHeader("Authorization").substring(7);
        tokenService.deleteToken(token);
        return ResponseEntity.ok("로그아웃 완료");
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateUser(@RequestBody UserUpdateDTO dto,
                                        @AuthenticationPrincipal UserDetailsImpl userDetails) {
        userService.updateUser(userDetails.getUserId(), dto);
        return ResponseEntity.ok("회원 정보가 수정되었습니다.");
    }
}

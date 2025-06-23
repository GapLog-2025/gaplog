package com.gaplog.token;

import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.time.Duration;

@Service
@RequiredArgsConstructor
public class TokenService {

    private final RedisTemplate<String, String> redisTemplate;

    public void saveToken(String token, String role, Long userId) {
        // ✅ 토큰을 key로, 이메일을 value로 저장하고 유효시간 설정 (예: 1시간)
        redisTemplate.opsForValue().set(token, role, Duration.ofHours(1));
    }

    // 토큰 삭제 (로그아웃 시 호출)
    public void deleteToken(String token) {
        redisTemplate.delete(token);
    }

    // 토큰 존재 여부 확인 (인증 필터에서 사용 가능)
    public boolean isTokenValid(String token) {
        return redisTemplate.hasKey(token);
    }
}

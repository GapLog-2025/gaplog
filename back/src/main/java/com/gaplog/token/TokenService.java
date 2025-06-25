package com.gaplog.token;

import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

import java.time.Duration;

@Service
@RequiredArgsConstructor
public class TokenService {

    private final StringRedisTemplate redisTemplate;

    // 로그인 시: 토큰 저장
    public void saveToken(String token) {
        redisTemplate.opsForValue().set(token, "loggedIn", Duration.ofMinutes(60)); // 또는 토큰 만료시간
    }

    // 로그아웃 시: 토큰 삭제
    public void deleteToken(String token) {
        redisTemplate.delete(token);
    }
}

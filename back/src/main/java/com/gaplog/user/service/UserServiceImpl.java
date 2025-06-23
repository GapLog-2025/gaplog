package com.gaplog.user.service;

import com.gaplog.jwt.JwtUtil;
import com.gaplog.user.domain.User;
import com.gaplog.user.dto.LoginResponseDTO;
import com.gaplog.user.dto.UserDTO;
import com.gaplog.user.dto.UserUpdateDTO;
import com.gaplog.user.mapper.UserMapper;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    private final JwtUtil jwtUtil;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserMapper userMapper, PasswordEncoder passwordEncoder, JwtUtil jwtUtil) {
        this.userMapper = userMapper;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    @Override
    public void register(UserDTO userDTO) {
        String role = userDTO.getRole();

        if (!"user".equalsIgnoreCase(role) && !"mentor".equalsIgnoreCase(role)) {
            throw new IllegalArgumentException("역할은 'user' 또는 'mentor'만 가능합니다.");
        }

        User user = new User();
        user.setEmail(userDTO.getEmail());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        user.setName(userDTO.getName());
        user.setJob(userDTO.getJob());
        user.setRole(role.toUpperCase()); // DB에 USER / MENTOR로 저장되도록

        userMapper.save(user);
    }

    @Override
    public LoginResponseDTO login(String email, String password) {
        User user = userMapper.findByEmail(email);
        if (user == null || !passwordEncoder.matches(password, user.getPassword())) {
            throw new BadCredentialsException("이메일 또는 비밀번호가 틀렸습니다.");
        }

        String token = jwtUtil.generateToken(user.getUserId(), user.getEmail(), user.getRole());
        return new LoginResponseDTO(user.getUserId(), token, user.getRole());
    }


    @Override
    public void updateUser(long userId, UserUpdateDTO dto) {
        if (!"user".equalsIgnoreCase(dto.getRole()) && !"mentor".equalsIgnoreCase(dto.getRole())) {
            throw new IllegalArgumentException("역할은 'user' 또는 'mentor'만 가능합니다.");
        }

        userMapper.updateRoleAndJob(userId, dto.getRole().toUpperCase(), dto.getJob());
    }

}
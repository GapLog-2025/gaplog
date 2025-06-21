package com.gaplog.user.service;


import com.gaplog.user.domain.User;
import com.gaplog.user.dto.LoginResponseDTO;
import com.gaplog.user.dto.UserDTO;
import com.gaplog.user.dto.UserUpdateDTO;

public interface UserService {
    void register(UserDTO userDTO);
    LoginResponseDTO login(String email, String password);
    User findByEmail(String email);
    void updateUser(String email, UserUpdateDTO userUpdateDTO);
}

package com.gaplog.user.mapper;

import com.gaplog.user.domain.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
    void save(User user);
    User findByEmail(String email);
    void updateRoleAndJob(long userId, String role, String job);
    User findByUserId(long userId);
}
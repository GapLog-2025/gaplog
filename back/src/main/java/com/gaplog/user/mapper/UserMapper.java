package com.gaplog.user.mapper;

import com.gaplog.user.domain.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
    void save(User user);
    User findByEmail(String email);
    User findByUserId(long userId);
    void updateRoleAndJob(String email, String role, String job, String username);

}
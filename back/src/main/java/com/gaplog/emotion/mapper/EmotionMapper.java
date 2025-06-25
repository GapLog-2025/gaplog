package com.gaplog.emotion.mapper;

import com.gaplog.emotion.domain.DayEmotion;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface EmotionMapper {
    void insertEmotion(DayEmotion emotion);
    void update(DayEmotion emotion);
    void delete(Long id);
    DayEmotion findById(@Param("id") Long id);
    List<DayEmotion> findByUserId(@Param("userId") Long userId);
}

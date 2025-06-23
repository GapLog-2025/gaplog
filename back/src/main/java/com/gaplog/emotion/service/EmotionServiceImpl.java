package com.gaplog.emotion.service;

import com.gaplog.emotion.domain.DayEmotion;
import com.gaplog.emotion.dto.*;
import com.gaplog.emotion.mapper.EmotionMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EmotionServiceImpl implements EmotionService {

    private final EmotionMapper mapper;

    @Override
    public void createEmotion(Long userId, EmotionRequestDTO dto) {
        DayEmotion emotion = DayEmotion.builder()
                .userId(userId)
                .emotion(dto.getEmotion())
                .content(dto.getContent())
                .date(dto.getDate())
                .weather(dto.getWeather())
                .sleeptime(dto.getSleeptime())
                .build();

        mapper.insertEmotion(emotion);
    }

    @Override
    public void updateEmotion(Long id, EmotionRequestDTO dto) {
        DayEmotion emotion = DayEmotion.builder()
                .emotionsId(id)
                .emotion(dto.getEmotion())
                .content(dto.getContent())
                .date(dto.getDate())
                .weather(dto.getWeather())
                .sleeptime(dto.getSleeptime())
                .build();
        mapper.update(emotion);
    }

    @Override
    public void deleteEmotion(Long id) {
        mapper.delete(id);
    }

    @Override
    public EmotionResponseDTO getEmotion(Long id) {
        DayEmotion e = mapper.findById(id);
        return EmotionResponseDTO.builder()
                .emotionsId(e.getEmotionsId())
                .emotion(e.getEmotion())
                .content(e.getContent())
                .date(e.getDate())
                .weather(e.getWeather())
                .sleeptime(e.getSleeptime())
                .createdAt(e.getCreatedAt())
                .build();
    }

    @Override
    public List<EmotionResponseDTO> getEmotionsByUser(Long userId) {
        return mapper.findByUserId(userId).stream().map(e -> EmotionResponseDTO.builder()
                        .emotionsId(e.getEmotionsId())
                        .emotion(e.getEmotion())
                        .content(e.getContent())
                        .date(e.getDate())
                        .weather(e.getWeather())
                        .sleeptime(e.getSleeptime())
                        .createdAt(e.getCreatedAt())
                        .build())
                .collect(Collectors.toList());
    }
}

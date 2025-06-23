package com.gaplog.emotion.service;

import com.gaplog.emotion.dto.*;
import java.util.List;

public interface EmotionService {
    void createEmotion(Long userId, EmotionRequestDTO dto);
    void updateEmotion(Long id, EmotionRequestDTO dto);
    void deleteEmotion(Long id);
    EmotionResponseDTO getEmotion(Long id);
    List<EmotionResponseDTO> getEmotionsByUser(Long userId);
}
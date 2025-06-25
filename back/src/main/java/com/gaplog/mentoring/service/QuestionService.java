package com.gaplog.mentoring.service;

import com.gaplog.mentoring.dto.*;

import java.util.List;

public interface QuestionService {

    void createQuestion(Long userId, QuestionRequestDTO dto);

    List<QuestionResponseDTO> getAllQuestions();

    QuestionResponseDTO getQuestionById(Long questionId);

    void likeQuestion(Long userId, Long questionId);

    void unlikeQuestion(Long userId, Long questionId);

    void postAnswer(Long userId, Long questionId, AnswerRequestDTO dto);

    List<AnswerResponseDTO> getAnswersByQuestionId(Long questionId);

    List<QuestionResponseDTO> searchByTags(List<String> tags);
}
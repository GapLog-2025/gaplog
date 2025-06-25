package com.gaplog.mentoring.service;

import com.gaplog.mentoring.dto.*;
import com.gaplog.mentoring.mapper.QuestionMapper;
import com.gaplog.mentoring.domain.*;
import com.gaplog.user.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class QuestionServiceImpl implements QuestionService {

    private final UserMapper userMapper;
    private final QuestionMapper mapper;

    @Override
    public void createQuestion(Long userId, QuestionRequestDTO dto) {
        Question question = Question.builder()
                .userId(userId)
                .title(dto.getTitle())
                .content(dto.getContent())
                .build();
        mapper.insertQuestion(question);

        for (String tag : dto.getTags()) {
            // 1. 태그가 없으면 삽입
            mapper.insertTagIfNotExists(tag);

            // 2. 태그 ID 조회
            Long tagId = mapper.findTagIdByName(tag);

            // 3. 질문-태그 연결
            mapper.insertQuestionTag(question.getQuestionId(), tagId);
        }
    }

    @Override
    public List<QuestionResponseDTO> getAllQuestions() {
        return mapper.findAllQuestions().stream()
                .map(q -> {
                    String username = userMapper.findByUserId(q.getUserId()).getName(); // userId → username
                    return new QuestionResponseDTO(
                            q.getQuestionId(),
                            q.getTitle(),
                            q.getContent(),
                            username,
                            q.getCreatedAt(),
                            mapper.countLikesByQuestionId(q.getQuestionId()),
                            mapper.findTagsByQuestionId(q.getQuestionId())
                    );
                })
                .collect(Collectors.toList());
    }

    @Override
    public QuestionResponseDTO getQuestionById(Long questionId) {
        Question question = mapper.findQuestionById(questionId);
        String username = userMapper.findByUserId(question.getUserId()).getName();
        int likeCount = mapper.countLikesByQuestionId(questionId);
        List<String> tags = mapper.findTagsByQuestionId(questionId);

        return new QuestionResponseDTO(
                questionId,
                question.getTitle(),
                question.getContent(),
                username,
                question.getCreatedAt(),
                likeCount,
                tags
        );
    }

    @Override
    public void likeQuestion(Long userId, Long questionId) {
        if (!mapper.isLiked(userId, questionId)) {
            mapper.insertLike(userId, questionId);
        }
    }

    @Override
    public void unlikeQuestion(Long userId, Long questionId) {
        mapper.deleteLike(userId, questionId);
    }

    @Override
    public void postAnswer(Long userId, Long questionId, AnswerRequestDTO dto) {
        Answer answer = Answer.builder()
                .questionId(questionId)
                .userId(userId)
                .content(dto.getContent())
                .build();
        mapper.insertAnswer(answer);
    }

    @Override
    public List<AnswerResponseDTO> getAnswersByQuestionId(Long questionId) {


        return mapper.findAnswersByQuestionId(questionId).stream()
                .map(a -> new AnswerResponseDTO(a.getAnswerId(), a.getContent(),userMapper.findByUserId(a.getUserId()).getName(), a.getCreatedAt()))
                .collect(Collectors.toList());
    }


    @Override
    public List<QuestionResponseDTO> searchByTags(List<String> tags) {
        List<Question> questions = mapper.findQuestionsByTags(tags, tags.size());

        return questions.stream()
                .map(q -> {
                    String username = userMapper.findByUserId(q.getUserId()).getName();  // userId → 사용자 이름
                    List<String> tagList = mapper.findTagsByQuestionId(q.getQuestionId());
                    int likeCount = mapper.countLikesByQuestionId(q.getQuestionId());

                    return new QuestionResponseDTO(
                            q.getQuestionId(),
                            q.getTitle(),
                            q.getContent(),
                            username,
                            q.getCreatedAt(),
                            likeCount,
                            tagList
                    );
                })
                .collect(Collectors.toList());
    }
}

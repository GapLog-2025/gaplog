package com.gaplog.mentoring.mapper;

import com.gaplog.mentoring.domain.*;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.Arrays;
import java.util.List;

@Mapper
public interface QuestionMapper {

    void insertQuestion(Question question);

    List<Question> findAllQuestions();

    Question findQuestionById(Long questionId);

    void insertLike(@Param("userId") Long userId, @Param("questionId") Long questionId);

    void deleteLike(@Param("userId") Long userId, @Param("questionId") Long questionId);

    int countLikesByQuestionId(Long questionId);

    void insertAnswer(Answer answer);

    List<Answer> findAnswersByQuestionId(Long questionId);

    void insertQuestionTag(@Param("questionId") Long questionId, @Param("tagId") Long tagId);

    List<String> findTagsByQuestionId(Long questionId);

    void insertTagIfNotExists(@Param("tagName") String tagName);

    Long findTagIdByName(@Param("tagName") String tagName);

    boolean isLiked(@Param("userId") Long userId, @Param("questionId") Long questionId);

    List<Question> findQuestionsByTags(@Param("tags") List<String> tags, @Param("tagCount") int tagCount);

    List<Question> findAllMyQuestions(Long userId);
}

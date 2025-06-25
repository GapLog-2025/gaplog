package com.gaplog.mentoring.controller;


import com.gaplog.mentoring.dto.*;
import com.gaplog.mentoring.service.QuestionService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import com.gaplog.security.UserDetailsImpl;
import org.springframework.http.ResponseEntity;



import java.util.List;

@RestController
@RequestMapping("/api/questions")
public class QuestionController {
    private final QuestionService questionService;

    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @Operation(summary = "질문 작성")
    @PostMapping
    public ResponseEntity<Void> postQuestion(@AuthenticationPrincipal UserDetailsImpl user,
                                             @RequestBody QuestionRequestDTO dto) {
        questionService.createQuestion(user.getUserId(), dto);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "전체 질문 가져오기")
    @GetMapping
    public ResponseEntity<List<QuestionResponseDTO>> getQuestions() {
        return ResponseEntity.ok(questionService.getAllQuestions());
    }

    @Operation(summary = "질문 상세")
    @GetMapping("/{questionId}")
    public ResponseEntity<QuestionResponseDTO> getQuestion(@PathVariable Long questionId) {
        return ResponseEntity.ok(questionService.getQuestionById(questionId));
    }

    @Operation(summary = "좋아요 누르기")
    @PostMapping("/{questionId}/like")
    public ResponseEntity<Void> likeQuestion(@AuthenticationPrincipal UserDetailsImpl user,
                                             @PathVariable Long questionId) {
        questionService.likeQuestion(user.getUserId(), questionId);
        return ResponseEntity.ok().build();
    }
    @Operation(summary = "좋아요 삭제")
    @DeleteMapping("/{questionId}/like")
    public ResponseEntity<Void> unlikeQuestion(@AuthenticationPrincipal UserDetailsImpl user,
                                               @PathVariable Long questionId) {
        questionService.unlikeQuestion(user.getUserId(), questionId);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "질문 답장생성")
    @PostMapping("/{questionId}/answers")
    public ResponseEntity<Void> postAnswer(@AuthenticationPrincipal UserDetailsImpl user,
                                           @PathVariable Long questionId,
                                           @RequestBody AnswerRequestDTO dto) {
        questionService.postAnswer(user.getUserId(), questionId, dto);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "질문 답변 가져오기")
    @GetMapping("/{questionId}/answers")
    public ResponseEntity<List<AnswerResponseDTO>> getAnswers(@PathVariable Long questionId) {
        return ResponseEntity.ok(questionService.getAnswersByQuestionId(questionId));
    }

    @Operation(summary = "태그로 질문 찾기")
    @GetMapping("/search-by-tags")
    public ResponseEntity<List<QuestionResponseDTO>> searchQuestionsByTags(@RequestParam List<String> tags) {
        return ResponseEntity.ok(questionService.searchByTags(tags));
    }
}

package com.gaplog.gapreview.controller;

import com.gaplog.gapreview.dto.*;
import com.gaplog.gapreview.service.GapReviewService;
import com.gaplog.security.UserDetailsImpl;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/gap-reviews")
public class GapReviewController {

    private final GapReviewService gapReviewService;

    @Operation(summary = "후기 작성")
    @PostMapping
    public ResponseEntity<?> writeReview(@RequestBody GapReviewRequestDTO dto,
                                         @AuthenticationPrincipal UserDetailsImpl userDetails) {
        gapReviewService.writeReview(userDetails.getUserId(), dto);
        return ResponseEntity.ok("후기 작성 완료!");
    }

    @Operation(summary = "내가 북마크한 후기 목록")
    @GetMapping("/bookmarks")
    public ResponseEntity<List<GapReviewResponseDTO>> getBookmarkedReviews(@AuthenticationPrincipal UserDetailsImpl userDetails) {
        Long userId = userDetails.getUserId();
        return ResponseEntity.ok(gapReviewService.getBookmarkedReviews(userId));
    }


    @Operation(summary = "공백기 후기 검색")
    @GetMapping("/search")
    public ResponseEntity<List<GapReviewResponseDTO>> searchReviews(
            @ModelAttribute GapReviewSearchCondition cond,
            @AuthenticationPrincipal UserDetailsImpl userDetails) {

        Long userId = userDetails.getUserId();
        return ResponseEntity.ok(gapReviewService.searchReviews(cond, userId));
    }

    @Operation(summary = "후기 북마크")
    @PostMapping("/{reviewId}/bookmark")
    public ResponseEntity<?> bookmark(@PathVariable Long reviewId,
                                      @AuthenticationPrincipal UserDetailsImpl userDetails) {
        gapReviewService.addBookmark(userDetails.getUserId(), reviewId);
        return ResponseEntity.ok("북마크 완료");
    }

    @Operation(summary = "후기 북마크 해제")
    @DeleteMapping("/{reviewId}/bookmark")
    public ResponseEntity<?> unbookmark(@PathVariable Long reviewId,
                                        @AuthenticationPrincipal UserDetailsImpl userDetails) {
        gapReviewService.removeBookmark(userDetails.getUserId(), reviewId);
        return ResponseEntity.ok("북마크 해제 완료");
    }

    @Operation(summary = "전체 게시글을 북마크 수 순으로 정렬하여 조회")
    @GetMapping("/all")
    public ResponseEntity<List<GapReviewResponseDTO>> getAllReviews(@AuthenticationPrincipal UserDetailsImpl userDetails) {
        return ResponseEntity.ok(gapReviewService.getAllOrderByBookmarkCount(userDetails.getUserId()));
    }

    @Operation(summary = "내가 쓴 후기 목록 조회")
    @GetMapping("/my")
    public ResponseEntity<List<GapReviewResponseDTO>> getMyReviews(@AuthenticationPrincipal UserDetailsImpl userDetails) {
        return ResponseEntity.ok(gapReviewService.getMyReviews(userDetails.getUserId()));
    }

    @Operation(summary = "후기 상세 조회")
    @GetMapping("/{reviewId}")
    public ResponseEntity<GapReviewResponseDTO> getReviewDetail(@PathVariable Long reviewId,
                                                                @AuthenticationPrincipal UserDetailsImpl userDetails) {
        return ResponseEntity.ok(gapReviewService.getReviewDetail(userDetails.getUserId(), reviewId));
    }
}
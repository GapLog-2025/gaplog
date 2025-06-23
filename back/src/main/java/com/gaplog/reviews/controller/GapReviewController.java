package com.gaplog.reviews.controller;

import com.gaplog.reviews.domain.GapReview;
import com.gaplog.reviews.dto.GapReviewRequest;
import com.gaplog.reviews.service.GapReviewService;
import com.gaplog.security.UserDetailsImpl;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class GapReviewController {

    private final GapReviewService gapReviewService;

    public GapReviewController(GapReviewService gapReviewService) {
        this.gapReviewService = gapReviewService;
    }

    @PostMapping("/reviews")
    @Operation(summary = "후기 작성")
    public void writeReview(@AuthenticationPrincipal UserDetailsImpl userDetails,
                            @RequestBody GapReviewRequest request) {
        Long userId = userDetails.getUserId();  // ← 확실하게 받기
        gapReviewService.writeReview(userId, request);
    }

    @GetMapping
    @Operation(summary = "전체 후기 조회")
    public List<GapReview> getReviews() {
        return gapReviewService.getAllReviews();
    }

    @GetMapping("/{reviewId}")
    @Operation(summary = "후기 상세 열람")
    public GapReview getReview(@PathVariable Long reviewId) {
        return gapReviewService.getReview(reviewId);
    }

    @DeleteMapping("/{reviewId}")
    @Operation(summary = "후기 삭제")
    public void deleteReview(@AuthenticationPrincipal UserDetailsImpl userDetails,
                             @PathVariable Long reviewId) {
        Long userId = userDetails.getUserId();
        gapReviewService.deleteReview(reviewId, userId);
    }
}


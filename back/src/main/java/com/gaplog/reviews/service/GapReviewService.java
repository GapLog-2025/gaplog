package com.gaplog.reviews.service;

import com.gaplog.reviews.domain.GapReview;
import com.gaplog.reviews.dto.GapReviewRequest;
import com.gaplog.reviews.mapper.GapReviewMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class GapReviewService {
    private final GapReviewMapper gapReviewMapper;

    public void writeReview(Long userId, GapReviewRequest dto) {
        GapReview review = new GapReview();
        review.setUserId(userId);
        review.setTitle(dto.getTitle());
        review.setMajor(dto.getMajor());
        review.setContent(dto.getContent());
        review.setGrade(dto.getGrade());
        review.setGapPeriod(LocalDate.parse(dto.getGapPeriod()));

        gapReviewMapper.insertReview(review);
    }

    public GapReview getReview(Long id) {
        return gapReviewMapper.findById(id);
    }

    public List<GapReview> getAllReviews() {
        return gapReviewMapper.findAll();
    }

    public void deleteReview(Long id, Long userId) {
        gapReviewMapper.deleteById(id, userId);
    }
}

package com.gaplog.reviews.mapper;

import com.gaplog.reviews.domain.GapReview;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;

@Mapper
public interface GapReviewMapper {
    void insertReview(GapReview review);
    GapReview findById(Long id);
    List<GapReview> findAll();
    void deleteById(Long id, Long userId);
}

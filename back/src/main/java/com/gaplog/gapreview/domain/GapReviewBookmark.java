package com.gaplog.gapreview.domain;

import lombok.*;

import java.sql.Timestamp;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GapReviewBookmark {
    private Long gapReviewBookmarksId;
    private Long userId;
    private Long gapReviewsId;
    private Timestamp createdAt;
}

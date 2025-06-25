package com.gaplog.emotion.controller;


import com.gaplog.emotion.dto.*;
import com.gaplog.emotion.service.EmotionService;
import com.gaplog.security.UserDetailsImpl;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/emotion")
@RequiredArgsConstructor
public class EmotionController {

    private final EmotionService service;

    @PostMapping
    @Operation(summary = "감정 일기 등록")
    public ResponseEntity<Void> create(@AuthenticationPrincipal UserDetailsImpl user,
                                       @RequestBody EmotionRequestDTO dto) {


        service.createEmotion(user.getUserId(), dto);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    @Operation(summary = "감정 일기 수정")
    public ResponseEntity<Void> update(@PathVariable Long id, @RequestBody EmotionRequestDTO dto) {
        service.updateEmotion(id, dto);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "감정 일기 삭제")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.deleteEmotion(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{id}")
    @Operation(summary = "감정 일기 단건 조회")
    public ResponseEntity<EmotionResponseDTO> get(@PathVariable Long id) {
        return ResponseEntity.ok(service.getEmotion(id));
    }

    @GetMapping
    @Operation(summary = "감정 일기 전체 조회")
    public ResponseEntity<List<EmotionResponseDTO>> getAll(@AuthenticationPrincipal UserDetailsImpl user) {
        return ResponseEntity.ok(service.getEmotionsByUser(user.getUserId()));
    }
}


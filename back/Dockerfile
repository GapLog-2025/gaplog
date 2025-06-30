# 1단계: Gradle을 이용해 빌드
FROM gradle:7.6.0-jdk17 AS build

WORKDIR /app

# Gradle 설정 파일 복사
COPY build.gradle settings.gradle ./

# 종속성 캐시를 위한 의존성 미리 다운로드 (옵션)
RUN gradle dependencies --no-daemon || true

# 나머지 소스 복사
COPY src ./src

# 빌드 수행 (테스트는 생략)
RUN gradle clean build -x test --no-daemon


# 2단계: 빌드된 JAR을 실행할 최소한의 이미지
FROM openjdk:17-jdk-slim

WORKDIR /app

# 빌드한 JAR 복사
COPY --from=build /app/build/libs/*.jar app.jar

# 애플리케이션 포트 오픈
EXPOSE 8080

# 실행 명령
ENTRYPOINT ["java", "-jar", "app.jar"]
# 기본 이미지 지정 (여기서는 OpenJDK 11을 기반으로 합니다.)
FROM adoptopenjdk/openjdk11

WORKDIR /app

# 애플리케이션 JAR 파일을 이미지에 추가
COPY build/libs/money-0.0.1-SNAPSHOT.jar /app/app.jar

# 컨테이너 실행 시 수행할 명령 지정 (프로파일 설정을 여기에 추가)
CMD ["java", "-jar", "/app/app.jar"]

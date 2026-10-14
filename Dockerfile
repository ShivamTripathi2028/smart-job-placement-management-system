FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY .mvn/ .mvn/
COPY mvnw pom.xml ./

RUN chmod +x mvnw
RUN ./mvnw -B dependency:go-offline

COPY src ./src

RUN ./mvnw -B package -DskipTests

EXPOSE 8080

CMD ["sh", "-c", "java -jar target/smart-job-placement-management-system-0.0.1-SNAPSHOT.jar --server.port=${PORT:-8080}"]
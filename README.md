# Smart Job and Placement Management System

A backend-based Job and Placement Management System developed using Java, Spring Boot, Spring Data JPA, and MySQL.

This project provides RESTful APIs to manage students, companies, job opportunities, job applications, placements, and placement dashboard statistics.

## Features

- Student Management
- Company Management
- Job Management
- Job Application Management
- Placement Management
- Input Validation
- Global Exception Handling
- Dashboard Summary
- Application Statistics
- Placement Statistics
- RESTful API Architecture
- MySQL Database Integration

## Technologies Used

- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- Jakarta Bean Validation
- MySQL
- Maven
- Postman
- Visual Studio Code
- Git and GitHub

## Project Structure

src/main/java/com/shivam/smartjobplacementmanagementsystem
├── controller
├── entity
├── exception
├── repository
└── service

## Prerequisites

Before running the project, ensure that the following tools are installed:

- Java Development Kit (JDK)
- MySQL Server
- Git
- A terminal or command-line application

## Database Configuration

1. Start your MySQL server.
2. Create a database named "smart_job_placement".
3. Configure the database connection in "src/main/resources/application.properties".
4. Set the "DB_PASSWORD" environment variable to your local MySQL password.

The application uses an environment variable for the database password instead of storing the password directly in the source code.

Security Note: Never commit database passwords, API keys, or other secrets to GitHub.

## How to Run the Project

1. Clone or download this repository.
2. Open the project directory in a terminal.
3. Configure the MySQL database and the "DB_PASSWORD" environment variable.
4. Run the following command:

./mvnw spring-boot:run

5. Once the application starts successfully, test the REST APIs using Postman.

The application uses port "8080" by default.

## API Modules

The application provides REST API modules for:

- Students
- Companies
- Jobs
- Job Applications
- Placements
- Dashboard Statistics

Use Postman to test the endpoints supported by the application.

## Future Enhancements

- User authentication and authorization
- Role-based access for students, recruiters, and administrators
- Improved dashboard and reporting features
- API documentation using Swagger/OpenAPI
- Frontend integration

## Author

Shivam Tripathi

B.Tech Computer Science and Engineering Student

## Project Purpose

This project demonstrates practical application development using Java, Spring Boot, REST APIs, Spring Data JPA, and MySQL.
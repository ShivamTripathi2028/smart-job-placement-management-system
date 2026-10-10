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

API Endpoints
Base URL: http://localhost:8080
  
 1. Student Management

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | /students | Create a student |
| GET | /students | Get all students |
| GET | /students/{id} | Get a student by ID |
| PUT | /students/{id} | Update a student |
| DELETE | /students/{id} | Delete a student |

2. Company Management

| Method |  Endpoint |  Description  |
| --- | --- | --- |
| POST |	/companies | Create a company |
| GET |	/companies | Get all companies |
| GET |	/companies/{id} | Get a company by ID |
| PUT |	/companies/{id} | Update a company |
| DELETE |	/companies/{id}	| Delete a company |

3. Job Management

| Method | Endpoint | Description |
| --- | --- | --- |
| POST |	/jobs | Create a job |
| GET |	/jobs | Get all jobs |
| GET |	/jobs/{id}	| Get a job by ID | 
| PUT |	/jobs/{id}	| Update a job |
| DELETE |	/jobs/{id}	| Delete a job |

4. Job Application Management

| Method | Endpoint | Description |
| --- | --- | --- |
| POST |	/applications	| Submit a job application |
| GET |	/applications	| Get all applications |
| GET |	/applications/{id}	| Get an application by ID |
| PUT |	/applications/{id}	| Update an application |
| DELETE |	/applications/{id}	| Delete an application |

5. Placement Management

| Method | Endpoint | Description |
| --- | --- | --- |
| POST |	/api/placements	| Create a placement |
| GET | /api/placements	| Get all placements |
| GET |	/api/placements/{id}	| Get a placement by ID |
| PUT |	/api/placements/{id}	| Update a placement |
| DELETE |	/api/placements/{id}	| Delete a placement |

6. Dashboard

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | /dashboard/summary	| Get overall dashboard summary |
| GET |	/dashboard/placement-statistics	| Get placement statistics |
| GET |	/dashboard/application-statistics	| Get application statistics |

7. Home

| Method | Endpoint | Description |
| --- | --- | --- |
| GET |	/	| Access the home endpoint |

Testing
Use Postman to test the endpoints. For POST and PUT requests, select Body → raw → JSON when the endpoint expects a JSON request body.

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
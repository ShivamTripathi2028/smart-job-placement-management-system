# Smart Job and Placement Management System

A full-stack web application designed to manage students, companies, job opportunities, job applications, and placement records through a centralized dashboard.

Built using React, Java, Spring Boot, Spring Data JPA, and MySQL, the system provides RESTful APIs and a web-based interface for placement management.

## Key Features

- Interactive dashboard with live statistics
- Student record management
- Company information management
- Job opportunity management
- Job application tracking
- Placement record management
- RESTful API integration
- MySQL database integration
- Input validation and exception handling
- Responsive web interface

## Technology Stack

*Frontend*
- React
- Vite
- JavaScript
- HTML5
- CSS3

*Backend*
- Java
- Spring Boot
- Spring Data JPA
- Spring Web
- Jakarta Bean Validation
- Maven

*Database*
- MySQL

*Tools*
- Visual Studio Code
- Postman
- Git and GitHub

## Project Structure

text
smart-job-placement-management-system/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── src/
│   └── main/
│       └── java/
│           └── com/shivam/smartjobplacementmanagementsystem/
│               ├── config/
│               ├── controller/
│               ├── entity/
│               ├── exception/
│               ├── repository/
│               └── service/
└── pom.xml


## REST API Endpoints

| Module | Endpoint | Operations |
|---|---|---|
| Students | /students | GET, POST |
| Companies | /companies | GET, POST |
| Jobs | /jobs | GET, POST |
| Applications | /applications | GET, POST |
| Placements | /api/placements | GET, POST, PUT, DELETE |

Available operations depend on the implemented controller methods.

## Getting Started

### Prerequisites

- Java Development Kit
- Node.js and npm
- MySQL Server
- Maven
- Git

### 1. Clone the Repository

bash
git clone https://github.com/ShivamTripathi2028/smart-job-placement-management-system.git
cd smart-job-placement-management-system


### 2. Configure the Database

Create a MySQL database:

sql
CREATE DATABASE smart_job_placement;


Configure your database connection in the Spring Boot application settings.

Use environment variables or a local configuration file for database credentials. Do not commit passwords or other secrets to GitHub.

### 3. Start the Backend

From the project root directory, run:

bash
./mvnw spring-boot:run


The backend is configured to run on:

text
http://localhost:8080


### 4. Start the Frontend

Open another terminal and run:

bash
cd frontend
npm install
npm run dev


Open the local development address displayed by Vite in your terminal. The current setup uses:

text
http://localhost:5175


### 5. Test the Application

Open the frontend in your browser and explore the dashboard and management sections.

REST APIs can also be tested using Postman.

## Learning Outcomes

This project demonstrates practical experience with:

- Full-stack application development
- REST API development and integration
- Java and Spring Boot
- Database connectivity using MySQL
- React component-based UI development
- Git and GitHub version control

## Future Enhancements

- Add, edit, and delete forms across management modules
- Search, filtering, and pagination
- User authentication and role-based access control
- Dashboard charts and reports
- Automated testing

## Author

*Shivam Tripathi*

B.Tech Computer Science and Engineering Student

GitHub: [ShivamTripathi2028](https://github.com/ShivamTripathi2028)

---

If you find this project useful, consider giving the repository a star.

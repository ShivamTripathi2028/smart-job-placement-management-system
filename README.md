# Smart Job and Placement Management System

A full-stack web application designed to manage students, companies, job opportunities, job applications, and placement records through a centralized dashboard.

Built using React, Java, Spring Boot, Spring Data JPA, and MySQL, this project provides RESTful APIs and a web-based interface for placement management.

## Live Demo

- Live Website: https://smart-job-placement-management-syst.vercel.app/
- Backend API: https://smart-job-placement-management-system.onrender.com
- GitHub Repository: https://github.com/ShivamTripathi2028/smart-job-placement-management-system

## Key Features

- Interactive dashboard with statistics
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

### Frontend

- React
- Vite
- JavaScript
- HTML5
- CSS3

### Backend

- Java
- Spring Boot
- Spring Data JPA
- Spring Web
- Jakarta Bean Validation
- Maven

### Database

- MySQL hosted on Aiven

## Tools and Deployment

- Visual Studio Code
- Postman
- Git and GitHub
- Vercel
- Render

## Project Structure

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

Module| Endpoint| Supported Operations
Students| "/students"| GET, POST
Companies| "/companies"| GET, POST
Jobs| "/jobs"| GET, POST
Applications| "/applications"| GET, POST
Placements| "/api/placements"| GET, POST, PUT, DELETE
Dashboard Summary| "/dashboard/summary"| GET
Application Statistics| "/dashboard/application-statistics"| GET
Placement Statistics| "/dashboard/placement-statistics"| GET

## Getting Started

Prerequisites

- Java Development Kit (JDK)
- Node.js and npm
- MySQL Server
- Maven
- Git

1. Clone the Repository

git clone https://github.com/ShivamTripathi2028/smart-job-placement-management-system.git
cd smart-job-placement-management-system

2. Configure the Database

Create the database in MySQL:

CREATE DATABASE smart_job_placement;

Configure the database connection using your local application settings or environment variables.

Important: Never commit database passwords, API keys, or other sensitive credentials to GitHub.

3. Start the Backend

From the project root directory, run:

./mvnw spring-boot:run

The backend runs on:

http://localhost:8080

4. Start the Frontend

Open another terminal and run:

cd frontend
npm install
npm run dev

Open the local development URL displayed in your terminal. The current development setup uses:

http://localhost:5175

5. Test the Application

- Open the frontend in your browser.
- Explore the dashboard and management sections.
- Test the REST APIs using Postman.

## Deployment

- Frontend: Vercel
- Backend: Render
- Database: MySQL hosted on Aiven

## Learning Outcomes

This project demonstrates practical experience with:

- Full-stack application development
- REST API development and integration
- Java and Spring Boot
- Database connectivity using MySQL
- React component-based UI development
- Backend exception handling and validation
- Git and GitHub version control
- Cloud deployment and frontend-backend integration

## Future Enhancements

- Add, edit, and delete functionality across management modules
- Search, filtering, and pagination
- User authentication and role-based access control
- Dashboard charts and reports
- Automated testing

## Author

Shivam Tripathi

B.Tech Computer Science and Engineering Student

GitHub: https://github.com/ShivamTripathi2028

---

If you find this project useful, consider giving the repository a star.

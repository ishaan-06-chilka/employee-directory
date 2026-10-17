Employee Directory Application

A full-stack Employee Directory application built using React, Spring Boot, and MySQL. It allows users to manage employee information through a simple and user-friendly interface.

Features

- Add Employees: Create new employee records.
- View Employees: Display employee details, including ID, name, email, department, and salary.
- Edit Employees: Update existing employee information.
- Delete Employees: Remove employee records with a confirmation prompt.
- Search Employees: Search employees by name.
- Filter by Department: Filter employees according to their department.
- Form Validation: Validate required fields, email format, salary, and duplicate email addresses.
- Database Persistence: Store employee information in MySQL.
- Error Handling: Display helpful messages for successful operations and errors.

Tech Stack

Frontend

- React
- JavaScript
- HTML
- CSS
- Vite

Backend

- Java
- Spring Boot
- Spring Data JPA
- Maven
- REST API

Database

- MySQL

Project Structure

employee-directory/
├── EmployeeDirectoryProject/
│   └── employee-directory/   # Spring Boot backend
└── employee-frontend/        # React frontend

Prerequisites

Install the following before running the application:

- Java JDK 21
- Node.js and npm
- MySQL Server 8.0 or compatible
- Apache Maven
- Git (optional)

Setup and Installation

1. Clone the Repository

git clone https://github.com/ishaan-06-chilka/employee-directory.git
cd employee-directory

2. Configure MySQL

Create the database:

CREATE DATABASE myproject;

Configure your database username and password using environment variables. Do not commit database credentials to GitHub.

The backend uses the following configuration:

spring.datasource.url=jdbc:mysql://localhost:3306/myproject
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}

Set "DB_USERNAME" and "DB_PASSWORD" to your local MySQL credentials before starting the backend.

3. Run the Backend

Open a terminal and navigate to the backend directory:

cd EmployeeDirectoryProject/employee-directory

Run the Spring Boot application:

mvn spring-boot:run

The backend runs at:

"http://localhost:8080"

4. Run the Frontend

Open another terminal from the project root and run:

cd employee-frontend
npm install
npm run dev

Open the local URL displayed in the terminal, usually:

"http://localhost:5173"

Ensure that MySQL and the backend are running before using the frontend.

REST API Endpoints

Method| Endpoint| Description
GET| "/api/employees"| Get all employees
GET| "/api/employees/{id}"| Get an employee by ID
POST| "/api/employees"| Create an employee
PUT| "/api/employees/{id}"| Update an employee
DELETE| "/api/employees/{id}"| Delete an employee

Validation and Error Handling

- Required employee fields are validated.
- Email addresses must follow a valid format.
- Duplicate email addresses are rejected.
- Salary must be non-negative.
- Appropriate error responses are returned for invalid requests and missing employees.

Author

Ishaan Chilka

GitHub: "ishaan-06-chilka" (https://github.com/ishaan-06-chilka)

---

This project was developed as a full-stack Employee Directory application to demonstrate frontend development, REST API integration, backend development, database connectivity, CRUD operations, and validation.

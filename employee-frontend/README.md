# Employee Directory Application

A full-stack Employee Directory application built using React.js, Java Spring Boot, and MySQL. It allows users to manage employee records through a simple and responsive interface.

## Features

- Add new employees
- View all employee records
- Edit existing employee details
- Delete employees with confirmation
- Search employees by name
- Filter employees by department
- Validate required fields, email format, and salary
- Prevent duplicate email addresses
- Store employee records in MySQL
- Display success and error messages

## Technology Stack

**Frontend**
- React.js
- Vite
- JavaScript
- CSS

**Backend**
- Java 21
- Spring Boot
- Spring Web
- Spring Data JPA
- Jakarta Validation
- Maven

**Database**
- MySQL 8

## Employee Fields

| Field | Description |
|---|---|
| ID | Auto-generated employee ID |
| Name | Employee name |
| Email | Unique email address |
| Department | Employee department |
| Salary | Salary of the employee |

## REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/employees` | Get all employees |
| GET | `/api/employees/{id}` | Get an employee by ID |
| POST | `/api/employees` | Create an employee |
| PUT | `/api/employees/{id}` | Update an employee |
| DELETE | `/api/employees/{id}` | Delete an employee |

## Prerequisites

Install the following before running the application:

- Java JDK 21
- MySQL 8
- Node.js and npm
- Git

## Setup Instructions

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Configure MySQL

Create a database named `myproject` in MySQL:

```sql
CREATE DATABASE myproject;
```

### 3. Configure the backend

Open `EmployeeDirectoryProject/employee-directory/src/main/resources/application.properties`.

Set your local MySQL credentials using environment variables:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/myproject
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}
```

Set `DB_USERNAME` and `DB_PASSWORD` in your local environment before starting Spring Boot. Never commit real database passwords.

### 4. Run the backend

Open a terminal in the backend folder:

```bash
mvn spring-boot:run
```

The backend runs at:

`http://localhost:8080`

### 5. Run the frontend

Open another terminal in the frontend folder:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually:

`http://localhost:5173`

## Validation and Error Handling

- HTTP 400: Invalid employee details
- HTTP 404: Employee not found
- HTTP 409: Duplicate email address
- HTTP 204: Employee deleted successfully

## Author

Ishaan Chilka

## License

This project was developed as a practical interview assignment.
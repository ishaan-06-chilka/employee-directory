Employee Directory Application

A full-stack web application for managing employee records, built using React, Spring Boot, and MySQL. The application provides an intuitive interface for performing CRUD (Create, Read, Update, Delete) operations, searching employees, and filtering records by department.

Features

- Add Employees: Create employee records with name, email, department, and salary.
- View Employees: Display employee information, including employee ID.
- Edit Employees: Update existing employee details using a reusable form.
- Delete Employees: Remove employee records with a confirmation prompt.
- Search Employees: Search employee records by name.
- Filter by Department: Filter employees by department.
- Form Validation: Validate required fields, email format, and salary values.
- Unique Email Validation: Prevent duplicate email addresses.
- Database Persistence: Store employee records in MySQL so data remains available after refreshing the page.
- Error Handling: Display success and error messages for relevant operations.

Technology Stack

Layer| Technologies
Frontend| React, JavaScript, HTML, CSS
Frontend Tool| Vite
Backend| Java 21, Spring Boot
Data Access| Spring Data JPA
API| RESTful APIs
Database| MySQL
Build Tool| Maven

Project Structure

employee-directory/
├── EmployeeDirectoryProject/
│   └── employee-directory/
│       └── src/
│           └── main/
│               ├── java/
│               └── resources/
│
├── employee-frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md

Prerequisites

Install the following software before running the application:

- "Java JDK 21" (https://www.oracle.com/java/technologies/downloads/)
- "Node.js and npm" (https://nodejs.org/)
- "MySQL Server" (https://dev.mysql.com/downloads/mysql/)
- "Apache Maven" (https://maven.apache.org/download.cgi)

Git is also required to clone the repository.

Getting Started

1. Clone the Repository

Open a terminal and run:

git clone https://github.com/ishaan-06-chilka/employee-directory.git
cd employee-directory

2. Configure the MySQL Database

Start your MySQL server and create the database:

CREATE DATABASE myproject;

The backend uses the following database configuration:

spring.datasource.url=jdbc:mysql://localhost:3306/myproject
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}

Set the following environment variables on your computer before starting the backend:

- "DB_USERNAME" — your MySQL username.
- "DB_PASSWORD" — your MySQL password.

Use your own local credentials. Never commit database passwords or other secrets to GitHub.

Ensure that the database name, username, password, and connection settings match your local MySQL setup.

3. Run the Backend

Open a terminal in the project root and navigate to the backend directory:

cd EmployeeDirectoryProject/employee-directory

Start the Spring Boot application using Maven:

mvn spring-boot:run

The backend will be available at:

"http://localhost:8080"

Note: If Maven is not available through the "mvn" command, install Maven or configure its executable path.

4. Run the Frontend

Open a second terminal in the project root directory. If necessary, navigate back to the project root first.

Then run:

cd employee-frontend
npm install
npm run dev

Vite will display a local development URL in the terminal, usually:

"http://localhost:5173"

Open that URL in your browser to use the application.

5. Start Using the Application

Make sure MySQL and the Spring Boot backend are running before using the frontend.

You can now add, view, edit, delete, search, and filter employee records through the application.

REST API Endpoints

The backend exposes the following REST endpoints:

HTTP Method| Endpoint| Description
GET| "/api/employees"| Retrieve all employees
GET| "/api/employees/{id}"| Retrieve an employee by ID
POST| "/api/employees"| Create a new employee
PUT| "/api/employees/{id}"| Update an existing employee
DELETE| "/api/employees/{id}"| Delete an employee

API Response Codes

Status Code| Meaning
200 OK| Request completed successfully
201 Created| Employee created successfully
204 No Content| Employee deleted successfully
400 Bad Request| Invalid request or validation error
404 Not Found| Employee does not exist
409 Conflict| Duplicate email or conflicting data

Validation and Error Handling

The application supports validation and error handling for common scenarios:

- Required employee fields must be provided.
- Email addresses must use a valid format.
- Duplicate email addresses are rejected.
- Salary must be non-negative.
- Requests for nonexistent employee IDs return an appropriate error.
- Users receive feedback for successful operations and errors.

Future Improvements

- Add automated unit and integration tests.
- Add pagination for large employee lists.
- Implement authentication and role-based access control.
- Deploy the application to a cloud platform.

Author

Ishaan Chilka

GitHub: "ishaan-06-chilka" (https://github.com/ishaan-06-chilka)

License

This project was developed as an employee management application for learning and demonstration purposes.

# Bank Account Management System

This project is a minimal full-stack **Bank Account Management System** built with **React** for the frontend and **Spring Boot** for the backend. It demonstrates CRUD operations, secure authentication with JWT, and role-based authorization.

---

## Features

### Frontend (React+SWC)
- Create new bank accounts with account holder name and type (Savings/Current/Overdraft).  
- View all accounts in a responsive table.  
- Edit and update account details.  
- Delete accounts.  
- Uses `useState` for managing state and `useEffect` for logging account list changes.  

### Backend (Spring Boot)
- Secure REST API for bank account management.  
- JWT-based authentication for API access.  
- Role-based access control (`USER`, `ADMIN`,`SuperAdmin`) for restricting operations.  
- Integrated with Spring Security for authentication and authorization.  
- Supports MySQL and PostgreSQL databases.  

---

## Tech Stack
- **Frontend:** React, Hooks (`useState`, `useEffect`), Axios  
- **Backend:** Spring Boot, Spring Security, JWT, JPA/Hibernate  
- **Database:** MySQL  

---

## Getting Started

### Prerequisites
- Node.js & npm  
- Java 17+  
- Maven  
- MySQL 

---

### Frontend Setup
```bash
cd frontend
npm install
npm start
```
- Runs on `http://localhost:5173`  

### Backend Setup
```bash
cd backend
mvn spring-boot:run
```
- Runs on `http://localhost:8080`  

---

### API Authentication
- Login returns a JWT token.  
- Include the token in API requests as:  
```
Authorization: Bearer <token>
```
- Role-based access:
  - `USER` → Read accounts  
  - `ADMIN` → Create, Update, Delete accounts  

---

## Project Structure
```
banking-crud/
├── frontend/         # React app
│   └── src/App.js
└── backend/          # Spring Boot app
    ├── src/main/java/com/example/banking
    └── src/main/resources/application.properties
```

---

## Usage
1. Run the backend Spring Boot server.  
2. Run the React frontend.  
3. Use the app to add, edit, view, and delete bank accounts.  
4. Authenticate using JWT for secure operations based on roles.

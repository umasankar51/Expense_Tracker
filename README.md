

A **full-stack Expense Tracker application** built with **Spring Boot**, **MySQL**, and **JavaScript**.  
Users can register, log in, add transactions, and view dynamic reports for expenses, income, and balances.

---

## Features

### User
- Register and login securely
- Add income and expense transactions
- View transaction history
- See dynamic balance, income, and expense reports

### Backend
- RESTful APIs for user authentication and transaction management
- Service and repository layers for clean architecture
- MySQL database integration via Spring Data JPA

### Frontend
- Static HTML pages with CSS styling and JavaScript functionality
- Responsive forms for login, registration, and transactions
- Dynamic transaction reporting

---

## Tech Stack

- **Backend:** Java, Spring Boot, Spring Data JPA, MySQL  
- **Frontend:** HTML, CSS, JavaScript  
- **Database:** MySQL (Workbench used for development)  
- **Build Tool:** Maven  
- **IDE:** Eclipse (Backend), VS Code (Frontend)  

---

## Installation

1. Clone the repository:
```bash
https://github.com/umasankar51/Expense_Tracker.git
```
2. Import the backend Spring Boot project in Eclipse.
3. Set up MySQL database using MySQL Workbench:
```bash
CREATE DATABASE expense_tracker;
```
  Update application.properties with your database credentials.

4. Run the Spring Boot backend application (it will start on http://localhost:8080 by default).  
5. Open the frontend folder (`Expense-Tracker-Frontend/`) in VS Code or any code editor.  
6. Open the HTML files in your browser or use a live server extension to view the app.  

---

## Contributing

Feel free to fork the repo, submit issues, or create pull requests.  
Maintain the project structure and coding style.

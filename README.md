# Angular Assignment

This repository contains the code for an Angular 18 client-side web application that meets the assignment requirements, including navigation, API consumption, reactive forms, and deployment to a public hosting platform.

---

## **Project Overview**

The application consists of three main pages:
1. **Home Page**: A landing page with introductory text.
2. **API Data Page**: Displays data fetched from a public API using Angular's HttpClient service.
3. **Form Page**: A reactive form for submitting feedback.

Additionally, the application uses a **JSON Server** to simulate a REST API for local testing and development.

---

## **Features**

### **1. Navigation**
- Implements a navigation bar with links to:
  - Home
  - API Data
  - Form
- Uses Angular Router for seamless client-side navigation.

### **2. Pages**
- **Home Page**: Contains a welcome message and a brief description of the application.
- **API Data Page**:
  - Consumes data from a public API.
  - Displays the fetched data dynamically.
  - Uses Angular Service and HttpClient for API requests.
- **Form Page**:
  - Implements a reactive form with the following fields:
    - Name (required)
    - Email (required, valid format)
    - Message (required, minimum length: 10 characters)
  - Provides validation feedback to users for incorrect inputs.

### **3. JSON Server (Fake API)**
- A **JSON Server** is set up to act as a fake API for local testing.
- A JSON file (`db.json`) in the `data` folder serves as the database.
- Command to run the JSON server:
  ```bash
  npx json-server --watch data/db.json --port 4201
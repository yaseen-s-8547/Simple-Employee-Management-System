# 🧑‍💼 Employee Management System

A full-stack Employee Management System built to perform complete **CRUD operations** with live search functionality, modals, and form handling. This project demonstrates practical understanding of frontend–backend communication using **React + Node.js + Express**.

---

## 🚀 Features

* ➕ Add new employees
* 📋 View employee list
* ✏️ Edit employee details
* ❌ Delete employees
* 🔍 Live search (real-time filtering)
* 🪟 Modal-based forms for add/edit
* 🌐 REST API using Node.js & Express
* 🔄 Dynamic UI updates without page reload

---

## 🛠️ Tech Stack

### Frontend

* React (Hooks)
* Axios (API requests)
* Bootstrap (UI styling & layout)

### Backend

* Node.js
* Express.js
* CORS
* dotenv

---

## 📂 Project Structure (Conceptual)

```
employee-management-system/
│
├── client/          # React Frontend
│   ├── Components/
│   │   ├── Navbar
│   │   ├── EmployeeList
│   │   ├── Input / Forms
│   │   └── Modals
│   └── App.jsx
│
├── server/          # Node + Express Backend
│   ├── routes
│   ├── controllers
│   └── server.js
│
└── README.md
```

---

## 🔌 API Endpoints

| Method | Endpoint                  | Description       |
| ------ | ------------------------- | ----------------- |
| GET    | `/employees`              | Get all employees |
| GET    | `/employees?search=query` | Search employees  |
| POST   | `/employees`              | Add new employee  |
| PUT    | `/employees/:id`          | Update employee   |
| DELETE | `/employees/:id`          | Delete employee   |

---

## 🧠 Key Concepts Learned

This project helped practice real-world development skills:

* Full CRUD implementation
* REST API design
* React state management
* Form handling (controlled inputs)
* Modal integration
* Live search using query parameters
* Axios for client-server communication
* Backend middleware usage (CORS, JSON parsing)
* Environment configuration with dotenv

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone <your-repo-link>
cd employee-management-system
```

---

### 2️⃣ Setup Backend

```
cd server
npm install
```

Create a `.env` file:

```
PORT=5000
```

Run server:

```
npm start
```

Server will run on:

```
http://localhost:5000
```

---

### 3️⃣ Setup Frontend

```
cd client
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 🔄 How It Works (Flow)

1. User interacts with UI (add/edit/delete/search)
2. React sends HTTP request using Axios
3. Express server processes request
4. Data updated in server memory (or database)
5. Updated data sent back to frontend
6. UI re-renders automatically

---

## 🎯 Future Improvements

* Database integration (MongoDB)
* Authentication & authorization
* Pagination for large datasets
* Deployment (Render / Vercel)
* Role-based access (Admin/User)
* Form validation
* Error handling improvements

---

## 👨‍💻 Author

Built as a learning project to strengthen full-stack development skills using the MERN ecosystem.

---

## ⭐ Acknowledgement

This project was created as part of hands-on practice for real-world job readiness in web development.

---

> “Small systems teach big engineering lessons.” 🚀

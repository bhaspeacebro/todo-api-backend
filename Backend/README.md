✅ TODO API – Secure Task Manager with JWT Auth

A RESTful backend built with **Node.js**, **Express**, **MongoDB**, and **JWT authentication** that allows registered users to securely manage their personal tasks. Perfect for hackathon submissions, portfolio projects, or as a starting point for full-stack apps.

---

⚙️ Tech Stack

- **Node.js** + **Express** – Server-side logic and routing
- **MongoDB Atlas** + **Mongoose** – Cloud-hosted NoSQL database
- **JWT (JSON Web Tokens)** – User authentication and access control
- **bcrypt** – Password hashing for secure login
- **dotenv** – Environment variable handling

---

 🚀 Features

- 🔐 User signup & login with secure password hashing
- 🛡 JWT-based route protection (middleware)
- 📋 Create, Read, Update, Delete (CRUD) tasks
- 👤 Each user sees only their own tasks
- 🌐 Ready for frontend integration or deployment

---

 📁 Project Structure

Backend/ ├── src/ │ ├── routes/ # Route handlers (auth + tasks) │ ├── models/ # Mongoose models for User and Task │ ├── middleware/ # JWT token verification middleware │ └── index.js # Server entry point ├── .env # Contains MONGO_URI, PORT, JWT_SECRET ├── .gitignore ├── README.md └── package.json

---

## 📦 Getting Started

### 1. Clone this repo

```bash
git clone https://github.com/<your-username>/todo-api-backend.git
cd todo-api-backend/Backend 
#Install dependencies
npm install
#Create a .env file
MONGO_URI=your-mongodb-atlas-uri
JWT_SECRET=your-super-secret-key
PORT=4000
# Run the server
npm run dev
Authorization: Bearer <your_jwt_token_here>
Content-Type: application/json


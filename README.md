TODO Task Manager — Katomaran Full Stack Hackathon Submission
This project is part of a hackathon organized by https://www.katomaran.com

🌐 Live Demo
Frontend: https://todo-frontend-five-beige.vercel.app

Backend API: https://todo-api-m3ve.onrender.com

 Demo video: [https://drive.google.com/file/d/1rVQIpOaxsfWia3qJ9uLugn_Cd-O3QSBx/view?usp=drive_link]

🛠 Tech Stack
        Layer	Technology Used
                              1)Frontend	React (Vite), Vercel
                              2)Backend	Node.js + Express, Render
                              3)Database	MongoDB Atlas
                              4)Auth	JWT + bcrypt
                              5)Versioning	Git + GitHub
                              6)Testing	Thunder Client, DevTools

✅ Implemented Features
 User Signup/Login with JWT-based session handling

 Task CRUD operations (create, view, delete)

 Protected API routes using authentication middleware

 User-task relationship stored in MongoDB

 Fully deployed frontend and backend accessible via public URLs

 Token securely stored in localStorage

 Responsive UI for both desktop and mobile

                           Architecture Diagram
 +----------------------------+                 +-------------------------------+
|     Frontend (Vercel)     |                 |     Backend API (Render)      |
|  React + Vite             |   HTTPS Calls   |  Node.js + Express            |
|  ---------------------    |<--------------->|  RESTful Routes               |
|  /login, /tasks UI        |                 |  /api/auth, /api/tasks        |
+-------------+-------------+                 +-------------+-----------------+
              |                                                 |
              | JWT Token in localStorage                       |
              | Authorization Header: "Bearer <token>"          |
              |                                                 |
              v                                                 v
      +----------------+                         +----------------------------+
      |   JWT Auth     |   ← Middleware          |      MongoDB Atlas         |
      |  Middleware    |   decodes token,        |  tododb: users & tasks     |
      |  auth.js       |   sets req.userId       |  mongoose models/schemas   |
      +----------------+                         +----------------------------+


Assumptions
Used JWT-based custom login instead of OAuth for the MVP

Real-time updates and task sharing are planned future enhancements

Initial UI is responsive and functional; filtering and styling improvements are in progress

 Getting Started Locally:
1.Backend
2.bash
3.git clone https://github.com/bhaspeacebro/todo-api-backend.git
--->cd todo-api-backend
--->npm install
--->npm run dev
*create a .env file with the following variables:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=4000

!!![Final  output Image of this project ](https://github.com/user-attachments/assets/a3cadbe9-abaa-40e5-a734-916b1ec4ed9b)


![Made with Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-ffffff?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563d7c?style=for-the-badge&logo=bootstrap&logoColor=white)
![Passport.js](https://img.shields.io/badge/Passport.js-34E27A?style=for-the-badge&logo=passport&logoColor=white)
![Render](https://img.shields.io/badge/Deployed_on-Render-46E3B7?style=for-the-badge)
![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
# NestGo 🏨🌍

**NestGo** is a comprehensive web application that allows users to discover, manage, and review travel accommodations. Whether you're planning a trip or exploring lodging options, NestGo makes the process smooth and user-friendly.

---

## 🛠️ Tech Stack

### 🔧 Backend
- **Node.js**: Server-side JavaScript runtime environment.
- **Express.js**: Lightweight web framework for handling routes and middleware.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.

### 🗄️ Database
- **MongoDB**: NoSQL database used to store user accounts, listings, and reviews.

### 🎨 Frontend
- **EJS (Embedded JavaScript Templates)**: Server-side templating for dynamic page rendering.
- **Bootstrap**: CSS framework for building responsive and modern UI.

### 🔐 Authentication
- **Passport.js**: Authentication middleware for secure login and registration.

### 📦 Session Management
- **express-session**: Middleware for session management.
- **connect-mongo**: MongoDB session store to persist sessions across server restarts.

### ⚙️ Environment Management
- **dotenv**: Loads environment variables from a `.env` file for secure config management.

---

## 🌟 Key Features

- **User Authentication**: Secure registration and login using Passport.js with persistent sessions.
- **Dynamic Listings**: Users can browse travel listings with images, descriptions, and pricing.
- **Review System**: Leave ratings and feedback to help others.
- **Responsive Design**: Works seamlessly on all screen sizes using Bootstrap.
- **Session Handling**: Sessions are stored securely using MongoDB.
- **Flash Messaging**: Real-time feedback for user actions (e.g., login errors, booking success).
- **Error Handling**: Custom middleware for managing unexpected errors.
- **RESTful API**: Structured backend with RESTful routes for scalable development.

---

## 🚀 Installation

Clone the repository and set up your environment:

```bash
# Clone the repository
git clone https://github.com/yourusername/nestgo.git

# Navigate into the project
cd nestgo

# Install dependencies
npm install

# Create a .env file and add your environment variables
# Example:
# MONGODB_URI=your_mongo_connection_string
# SESSION_SECRET=your_secret_key

# Run the app
npm start

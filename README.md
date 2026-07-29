# 🍽️ QuickDine

A full-stack restaurant table booking platform built with React, Node.js, Express.js and MongoDB.

---


## 🛠️ Tech Stack

### 🎨 Frontend

| Technology | Purpose |
|------------|---------|
| React 19 | Frontend Library |
| Vite | Build Tool |
| TypeScript | Type Safety |
| Tailwind CSS v4 | Styling |
| React Router v7 | Routing |
| Context API | State Management |
| Axios | API Communication |
| Lucide React | Icons |
| React Hot Toast | Notifications |

---

### ⚙️ Backend

| Technology | Purpose |
|------------|---------|
| Node.js | Backend Runtime |
| Express.js | REST API Framework |
| TypeScript | Type Safety |
| MongoDB | Database |
| Mongoose | ODM |
| JWT | Authentication |
| Bcrypt | Password Hashing |
| Multer | Image Upload |
| CORS | Cross-Origin Requests |

---

## ✨ Features

| Module | Capabilities |
|--------|--------------|
| 🔐 Authentication | User registration, login, JWT-based authentication, protected routes |
| 👤 Customer | Browse restaurants, search & filter restaurants, view details, check availability, book tables, manage bookings, cancel reservations |
| 🍽️ Restaurant | Restaurant listing, restaurant details, availability management |
| 📅 Booking | Create bookings, view booking history, cancel reservations, booking status management |
| 🏪 Restaurant Owner | Restaurant registration, manage restaurant profile, view incoming bookings, update booking status |
| 👨‍💼 Admin | Admin dashboard, approve restaurants, manage platform data, view statistics |
| 📱 Responsive UI | Modern responsive design for desktop and mobile devices |

---

## 🏗️ Architecture

                User
                  |
                  ↓
          React Frontend
      (Vite + TypeScript)
                  |
                  ↓
          REST API Calls
                  |
                  ↓
        Express.js Backend
                  |
                  ↓
          Controllers
                  |
                  ↓
          Mongoose Models
                  |
                  ↓
          MongoDB Database
---


### Architecture Flow

Frontend → Axios → Backend API → Controllers → Database


---



## 🌐 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get current user |

### Restaurant

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/restaurants` | Get all restaurants |
| GET | `/api/restaurants/featured` | Get featured restaurants |
| GET | `/api/restaurants/:slug` | Get restaurant details |
| GET | `/api/restaurants/:id/availability` | Check availability |

### Booking

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/bookings` | Create booking |
| GET | `/api/bookings/my` | Get user bookings |
| POST | `/api/bookings/:id/cancel` | Cancel booking |

### Owner

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/owner/restaurant` | Get owner restaurant |
| POST | `/api/owner/restaurant` | Create restaurant |
| GET | `/api/owner/bookings` | Get bookings |
| PUT | `/api/owner/bookings/:id/status` | Update booking status |

### Admin

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/restaurants` | Get restaurants |
| PUT | `/api/admin/restaurants/:id/approve` | Approve restaurant |
| GET | `/api/admin/stats` | Get statistics |

---


## ⚙️ Installation & Setup

### Frontend Setup
cd client
npm install
npm run dev
http://localhost:5173

### Backend Setup
cd client
npm install
npm run dev
http://localhost:5000




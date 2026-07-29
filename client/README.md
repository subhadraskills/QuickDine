# QuickDine 🍽️

QuickDine is a full-stack restaurant table booking application currently under development. The project allows users to explore restaurants, reserve tables, and manage bookings through a modern and responsive interface.



## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| ⚛️ React 19 | Frontend Library |
| ⚡ Vite | Build Tool |
| 🔷 TypeScript | Type Safety |
| 🎨 Tailwind CSS v4 | Styling |
| 🧭 React Router v7 | Client-side Routing |
| 🌐 Context API | State Management |
| 🎯 Lucide React | Icons |
| 🔔 React Hot Toast | Notifications |




## ✨ Features

| Module | Capabilities |
|--------|--------------|
| 👤 Customer | 🍽️ Browse & search restaurants <br> 🔍 Filter restaurants by preferences <br> 📄 View detailed restaurant information <br> 🪑 Check table availability <br> 📅 Book tables online <br> 📝 Add special requests & occasions <br> 📚 Manage booking history <br> ❌ Cancel reservations |
| 🏪 Restaurant Owner | 🏢 Restaurant registration workflow <br> 📊 Owner dashboard <br> ⚙️ Manage restaurant profile <br> 📥 Handle incoming bookings <br> ✅ Confirm / ❌ Cancel reservations |
| 👨‍💼 Admin | 🛠️ Admin dashboard <br> ✅ Restaurant approval management <br> 📈 Platform analytics & statistics |


## 🚀 Planned Features

- 🔔 Real-time booking notifications
- ⭐ Restaurant reviews & ratings
- ❤️ Favorite restaurants
- 🌙 Dark mode support
- 📱 Progressive Web App (PWA) support

## 📂 Project Structure

```bash
client/
│
├── src/
│   ├── components/
│   │   ├── admin/
│   │   ├── booking/
│   │   ├── home/
│   │   ├── owner/
│   │   └── restaurant/
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Search.tsx
│   │   ├── Dashboard.tsx
│   │   ├── OwnerDashboard.tsx
│   │   └── AdminDashboard.tsx
│   │
│   ├── context/
│   │   └── AppContext.tsx
│   │
│   ├── lib/
│   │   └── api.ts
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── public/
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🌐 API Integration

| Method | Endpoint | Description |
|--------|----------|-------------|
| 🔐 POST | `/auth/login` | User login |
| 📝 POST | `/auth/register` | User registration |
| 👤 GET | `/auth/me` | Fetch current user profile |
| 🍽️ GET | `/restaurants` | Fetch restaurant listings |
| ⭐ GET | `/restaurants/featured` | Fetch featured restaurants |
| 📄 GET | `/restaurants/:slug` | View restaurant details |
| 🪑 GET | `/restaurants/:id/availability` | Check table availability |
| 📅 POST | `/bookings` | Create table booking |
| 📚 GET | `/bookings/my` | View booking history |
| ❌ POST | `/bookings/:id/cancel` | Cancel booking |

---

## 👨‍💻 Author

Subhadra Kumari

GitHub:  
https://github.com/subhadraskills

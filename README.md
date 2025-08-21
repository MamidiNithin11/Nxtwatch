# 📺 Nxt Watch – React Video Streaming App

## 📌 Overview

Nxt Watch is a **YouTube-like video streaming platform** built with React.
It allows users to **log in securely, browse videos (Home, Trending, Gaming), watch details of a video, save videos for later, and switch between Light/Dark themes**.

The app is fully responsive and integrates with APIs for video data.

## 📂 Project Structure

```
nxt-watch/
│── public/
│── src/
│   ├── components/
│   │   ├── Login/
│   │   ├── Header/
│   │   ├── Sidebar/
│   │   ├── Home/
│   │   ├── Trending/
│   │   ├── Gaming/
│   │   ├── SavedVideos/
│   │   ├── VideoItemDetails/
│   │   └── NotFound/
│   │
│   ├── context/
│   │   ├── ThemeContext.js
│   │   └── SavedVideosContext.js
│   │
│   ├── utils/
│   │   └── ProtectedRoute.js
│   │
│   ├── App.js
│   ├── index.js
│   └── styles/
│
└── package.json
```

---

## 🔑 Features

### ✅ Completed

* **Login & Authentication**

  * JWT-based authentication using APIs
  * Secure login form with error handling
* **Protected Routes**

  * Restrict access if JWT is missing
* **Theme Switcher**

  * Light & Dark mode support

### 🔜 Remaining

1. **Home Page** – Fetch and display videos with search
2. **Trending Page** – List trending videos
3. **Gaming Page** – Show gaming-related videos
4. **Video Details Page** –

   * Play video using React Player
   * Like/Dislike/Save options
5. **Saved Videos Page** – Manage saved video list
6. **Logout Functionality** – Confirmation popup, remove JWT
7. **Not Found Page** – For invalid routes
8. **Responsive UI** – Works across devices

---
---

## 🚀 Tech Stack

* **React.js** – UI Development
* **React Router DOM** – Routing
* **React Icons** – Icons
* **React Player** – Video playback
* **React Loader Spinner** – Loader UI
* **Context API** – State management (Theme & Saved Videos)
* **js-cookie** – JWT token storage
* **CSS** – Styling & responsiveness

---

## ⚡ APIs Used

* `POST /login` → Login authentication
* `GET /videos/all?search=` → All videos with search
* `GET /videos/trending` → Trending videos
* `GET /videos/gaming` → Gaming videos
* `GET /videos/:id` → Video details

---

## 🛠️ Installation & Setup

1. Clone the repo

   ```bash
   git clone https://github.com/your-username/nxt-watch.git
   cd nxt-watch
   ```
2. Install dependencies

   ```bash
   npm install
   ```
3. Start the project

   ```bash
   npm start
   ```

---


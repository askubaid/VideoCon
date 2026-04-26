# e-Class: Professional Video Conferencing Platform

A modern, high-fidelity video conferencing application designed for educational environments. Built with React, Vite, and LiveKit, **e-Class** provides a seamless, light-themed experience with a focus on usability and classroom management.

🚀 **Live Demo:** [https://video-con-beta.vercel.app/](https://video-con-beta.vercel.app/)

---

## ✨ Key Features

### 🏢 Classroom Management
- **Role-Based Access:** Dedicated interfaces for **Teachers** and **Students**.
- **Secure PIN Access:** Simple and secure joining process using unique class PINs.
- **Header Status:** Real-time role and session identification (Institute of Space Technology Islamabad).

### 📹 High-Quality Video Room
- **Native LiveKit Integration:** Robust video and audio delivery using LiveKit Cloud.
- **Dynamic Layouts:**
  - **Grid View:** Automatic multi-user grid for standard discussions.
  - **Focus Mode:** One-click maximization of any participant's video.
  - **Screen Share Focus:** Automatic prominence for shared content with sideline carousels for participants.
- **Classroom Controls:** Full control over camera, microphone, and screen sharing.

### 💬 WhatsApp-Style Custom Chat
- **Premium UI:** WhatsApp-inspired light theme with beige backgrounds and intuitive message bubbles.
- **Smart Alignment:** Self-messages on the right, others on the left.
- **Rich Details:** Includes user avatars, centered usernames below avatars, and real-time timestamps.
- **Unread Notifications:** A vibrant red notification badge on the chat toggle keeps participants updated on new messages without needing the chat window open.

### 🎨 Premium Design & Aesthetics
- **Light Theme:** A clean, professional Facebook-inspired aesthetic using soft whites, grays, and brand blues.
- **Glassmorphism:** Elegant glass-card effects on the landing and joining pages.
- **Responsive Layout:** Fully optimized for desktop and mobile classroom experiences.

---

## 🛠️ Technology Stack

- **Frontend:** React 18 + Vite
- **Styling:** Vanilla CSS (Custom Design System)
- **Communication:** LiveKit SDK (WebRTC)
- **Deployment:** Vercel / Render

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- LiveKit Cloud Account (URL and Keys)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/askubaid/e-Class.git
   ```
2. Install dependencies for both frontend and backend:
   ```bash
   npm install
   cd server && npm install
   ```
3. Configure Environment Variables:
   - **Frontend** (Root `.env`):
     ```env
     VITE_LIVEKIT_URL=wss://your-project.livekit.cloud
     VITE_BACKEND_URL=http://localhost:3001
     ```
   - **Backend** (`server/.env`):
     ```env
     PORT=3001
     LIVEKIT_API_KEY=your_api_key
     LIVEKIT_API_SECRET=your_api_secret
     LIVEKIT_URL=wss://your-project.livekit.cloud
     ```
4. Run the application:
   ```bash
   # Run frontend (Root)
   npm run dev

   # Run backend (Server folder)
   cd server && node index.js
   ```

---

## ⚠️ LiveKit Free Tier Limitations

Since this project utilizes the LiveKit Cloud "Build" (Free) tier for WebRTC infrastructure, please note the following hard limitations:
- **Maximum 100 Concurrent Connections:** Across the entire project. For example, you can have 1 class of 100 students, or 4 simultaneous classes of 25 students.
- **5,000 WebRTC Minutes per Month:** A 60-minute class with 10 students consumes 600 minutes.
- **50 GB Monthly Data Transfer:** Depends heavily on camera usage and screen sharing.

If these limits are exceeded, new connections will be rejected until the monthly cycle resets.

---

## 📄 License
Created for educational purposes at the Institute of Space Technology (IST). All rights reserved.

# 🎨 AI Thumbnail Generator (MERN + Clipdrop AI)

A **full-stack AI Thumbnail Generator** built with the **MERN stack** that allows users to generate high-quality thumbnails using **Clipdrop AI**, manage **credit-based usage**, and view their **thumbnail history in a dashboard**.

This project demonstrates **real SaaS-level features** like authentication, protected APIs, credit management, and scalable AI integration.

---

## 🚀 Features

- 🔐 User Authentication (JWT + Cookies)
- 🎨 AI Thumbnail Generation (Clipdrop Text-to-Image)
- 💳 Credit-Based System (1 thumbnail = 1 credit)
- 📊 Dashboard with Thumbnail History
- ⬇️ Download Generated Thumbnails
- 🛡️ Protected Backend APIs
- ☁️ Cloudinary Image Storage
- ⚡ Redux Toolkit for State Management
- 📱 Fully Responsive UI (Tailwind CSS)

---

## 🛠️ Tech Stack

### Frontend
- React
- Redux Toolkit
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication

### AI & Storage
- Clipdrop AI (Text-to-Image)
- Cloudinary (Image Hosting)

---

## 📁 Project Structure
AI-Thumbnail-Generator/
│
├── Frontend/
│ ├── src/
│ │ ├── pages/
│ │ │ ├── Generate.jsx
│ │ │ ├── Dashboard.jsx
│ │ │ └── Login.jsx
│ │ ├── redux/
│ │ │ └── slice/
│ │ │ ├── userSlice.js
│ │ │ └── thumbnailSlice.js
│ │ └── App.jsx
│
└── Backend/
├── controllers/
│ └── thumbnail.controller.js
├── models/
│ ├── user.js
│ └── thumbnail.js
├── routes/
│ └── thumbnail.routes.js
├── middleware/
│ └── auth.js
├── utils/
│ └── cloudinary.js
├── index.js
└── .env


---

## ⚙️ Environment Variables

Create a `.env` file inside the **Backend** folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
SECRETKEY=your_jwt_secret
CLIPDROP_API_KEY=your_clipdrop_api_key

CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret

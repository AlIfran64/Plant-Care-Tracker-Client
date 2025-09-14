# Plantify - A Plant Care Tracker Website

**Plantify** is a smart and user-friendly plant care tracker designed to help users manage their plant collection with ease. With real-time user authentication, secure data storage, and an intuitive UI, Plantify helps plant lovers keep track of watering schedules and plant health all in one place.

## 🔗 Live Site
- 🌐 [https://plantify-7ddd6.web.app/](https://plantify-7ddd6.web.app/)

---

## Features

- **Add & View Plants**  
  Users can add new plants with species name, watering frequency, and other metadata.

- **Secure Firebase Authentication**  
  Firebase handles user login and registration, ensuring only logged-in users access their own plant data.

- **Sorted by Watering Date**  
  Plants are automatically sorted by their next scheduled watering date for timely reminders.

- **CRUD via REST API**  
  Backend built with Node.js and Express supports create, read, update, and delete operations for each user's plants.

- **MongoDB Atlas Integration**  
  All plant data is securely stored in MongoDB Atlas, a scalable and cloud-based NoSQL database.

---

## 🔗 Additional Links

- Server-side Repository: [https://github.com/AlIfran64/Plant-Care-Tracker-Server](https://github.com/AlIfran64/Plant-Care-Tracker-Server)

---

## Tech Stack

### Frontend
- **React.js** – Component-based UI
- **Tailwind CSS** – Utility-first CSS framework
- **Firebase Authentication** – User login/register

### Backend
- **Node.js** – JavaScript runtime
- **Express.js** – Lightweight web framework
- **MongoDB Atlas** – Cloud-based NoSQL database

---

### Frontend Setup

```bash
cd client
npm install
npm run dev
```
---

### Backend Setup

```bash
cd server
npm install
nodemon index.js
```

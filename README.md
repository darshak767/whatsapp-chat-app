<div align="center">

# 💬 WhatsApp Web Chat App

An expressive, full-stack WhatsApp-inspired chat management application built using **Node.js**, **Express.js**, **EJS**, and **MongoDB with Mongoose**. It features complete **CRUD** (Create, Read, Update, Delete) functionality with RESTful architecture and custom styling.

---

[![Node.js Version](https://img.shields.io/badge/Node.js-v18%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-5.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Local%20%2F%20Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-ODM-880000?style=for-the-badge&logo=mongoose&logoColor=white)](https://mongoosejs.com/)
[![EJS](https://img.shields.io/badge/Templates-EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)](https://ejs.co/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](LICENSE)

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Database Schema](#-database-schema)
- [RESTful Routing](#-restful-routing)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Database Setup & Seeding](#database-setup--seeding)
  - [Running the Application](#running-the-application)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [License](#-license)

---

## 📖 Overview

The **WhatsApp Web Chat App** serves as a lightweight messaging feed application. It allows users to view conversations, compose new messages to designated recipients, edit existing chats, and delete unwanted entries with instantaneous database synchronization via MongoDB.

---

## ✨ Key Features

- **Full CRUD Capabilities**:
  - **Create**: Compose and send a chat message from a sender to a designated receiver.
  - **Read**: View all stored chats chronologically with formatted timestamps and dates.
  - **Update**: Edit any existing chat message and recipient details dynamically.
  - **Delete**: Remove messages permanently with single-click actions.
- **RESTful Architecture**: Follows strict REST route naming conventions (`GET`, `POST`, `PUT`, `DELETE`).
- **Method Overriding**: Uses `method-override` middleware to seamlessly handle `PUT` and `DELETE` requests directly from standard HTML forms.
- **Sample Data Seeder**: Built-in seeding script (`init.js`) to quickly populate the database with mock conversations.
- **Responsive UI**: Custom CSS styling structured around clean chat bubbles and interactive cards.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Runtime Environment** | [Node.js](https://nodejs.org/) |
| **Web Framework** | [Express.js v5](https://expressjs.com/) |
| **Database** | [MongoDB](https://www.mongodb.com/) |
| **Object Data Modeling (ODM)** | [Mongoose](https://mongoosejs.com/) |
| **Templating Engine** | [EJS (Embedded JavaScript)](https://ejs.co/) |
| **Middleware** | [method-override](https://www.npmjs.com/package/method-override), `express.urlencoded` |
| **Development Utility** | [Nodemon](https://nodemon.io/) |

---

## 📁 Project Structure

```text
Whatsapp chat app/
├── models/
│   └── chat.js          # Mongoose schema and model definition for chats
├── public/
│   └── style.css        # Custom CSS styling for chat layouts and forms
├── views/
│   ├── edit.ejs         # Form view to update an existing message
│   ├── index.ejs        # Main feed displaying all chats
│   └── new.ejs          # Form view to compose and send a new message
├── .env                 # Environment variables (git-ignored)
├── .gitignore           # Git ignore configuration
├── index.js             # Express application server and route definitions
├── init.js              # Database seed script with sample conversation data
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation
```

---

## 🗄️ Database Schema

The `Chat` model is structured using Mongoose in [`models/chat.js`](models/chat.js):

```javascript
const chatSchema = new mongoose.Schema({
  from: { 
    type: String, 
    required: true 
  },
  to: { 
    type: String, 
    required: true 
  },
  message: { 
    type: String, 
    maxLength: 50 
  },
  created_at: { 
    type: Date, 
    default: Date.now, 
    required: true 
  }
});
```

---

## 🌐 RESTful Routing

| HTTP Method | Endpoint | Description | Action / View |
|---|---|---|---|
| `GET` | `/` | Root health check | Confirms server is running |
| `GET` | `/chats` | Index route | Renders all chats in `views/index.ejs` |
| `GET` | `/chats/new` | New chat form route | Renders message composition form (`views/new.ejs`) |
| `POST` | `/chats` | Create chat route | Saves new chat to MongoDB and redirects to `/chats` |
| `GET` | `/chats/:id/edit` | Edit chat form route | Renders edit form for a specific chat (`views/edit.ejs`) |
| `PUT` | `/chats/:id` | Update chat route | Updates message details and redirects to `/chats` |
| `DELETE` | `/chats/:id` | Destroy chat route | Deletes specific chat and redirects to `/chats` |

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) running locally on port `27017` (or a MongoDB Atlas connection string)
- [Git](https://git-scm.com/)

---

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/darshak767/whatsapp-chat-app.git
   cd "whatsapp-chat-app"
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

---

### Database Setup & Seeding

1. Make sure your local MongoDB daemon is running:
   ```bash
   # Windows (PowerShell/Command Prompt as administrator or service)
   net start MongoDB
   ```

2. *(Optional)* Seed the database with initial dummy chat conversations:
   ```bash
   node init.js
   ```
   > **Note:** Running `init.js` inserts mock conversations (Alice, Bob, Charlie, etc.) into the `Whatsapp` database.

---

### Running the Application

1. **Start the development server with live reload:**
   ```bash
   npm run dev
   ```

   *Alternatively, start using standard Node.js:*
   ```bash
   node index.js
   ```

2. **Access the application:**
   Open your browser and navigate to:
   ```text
   http://localhost:8000/chats
   ```

---

## 🔮 Future Enhancements

- [ ] **Real-time WebSockets**: Integrate [Socket.io](https://socket.io/) for instant bidirectional messaging without page refreshes.
- [ ] **User Authentication**: Add user login/signup with sessions or JWT (JSON Web Tokens).
- [ ] **Direct One-on-One Chat Rooms**: Organize conversations into private chat rooms between pairs of users.
- [ ] **Media Uploads**: Support image, audio, and attachment messaging via Cloudinary or AWS S3.
- [ ] **Dark Mode / UI Themes**: Match the exact dark/light aesthetic of official WhatsApp Web.

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m "Add some AmazingFeature"`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **ISC License**. See the [package.json](package.json) file for details.

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/darshak767">Darshak</a></sub>
</div>
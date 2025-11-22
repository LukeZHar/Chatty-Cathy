# 💬 Chatty-Cathy

A real-time chat application built with the MERN stack and Socket.IO. Connect with friends and family through instant messaging with a sleek, responsive interface.

## 🌟 Features

- **Real-time Messaging**: Instant message delivery using Socket.IO
- **User Authentication**: Secure signup and login with JWT tokens
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS and DaisyUI
- **User Search**: Find and start conversations with other users
- **Message History**: Persistent conversation storage
- **Online Status**: See when users are online
- **Sound Notifications**: Audio alerts for new messages

## 🚀 Live Demo

- **Live App**: [https://chatty-cathy.onrender.com](https://chatty-cathy.onrender.com)
- **GitHub**: [https://github.com/LukeZHar/Chatty-Cathy](https://github.com/LukeZHar/Chatty-Cathy)
- **YouTube**: [https://youtu.be/hqtvkPTs_ws?si=KAbgWIWSHKitCmWG](https://youtu.be/hqtvkPTs_ws?si=KAbgWIWSHKitCmWG)

## 🧪 Test Users

You can use these demo accounts to test the application:

| Username   | Password |
| ---------- | -------- |
| bobdoe     | 123456   |
| janedoe    | 123456   |
| ClientJohn | 123456   |
| testUser   | 123456   |

## 🛠️ Tech Stack

### Frontend

- **React** - UI library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library
- **React Router** - Client-side routing
- **Socket.IO Client** - Real-time bidirectional event-based communication
- **React Hot Toast** - Beautiful toast notifications
- **Zustand** - Lightweight state management

### Backend

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Socket.IO** - Real-time web socket communication
- **JWT** - JSON Web Tokens for authentication
- **bcrypt.js** - Password hashing
- **Cookie Parser** - Parse HTTP request cookies

## 📦 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/LukeZHar/Chatty-Cathy.git
   cd Chatty-Cathy
   ```

2. **Install dependencies**

   ```bash
   npm run build
   ```

3. **Environment Variables**

   Create a `.env` file in the root directory:

   ```env
   PORT=5000
   MONGO_DB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   ```

4. **Start the application**

   ```bash
   npm run start
   ```

   For development:

   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5000`

## 📁 Project Structure

```
chatty-cathy/
├── backend/
│   ├── controllers/     # Route handlers
│   ├── lib/            # Database configuration
│   ├── middleware/     # Authentication middleware
│   ├── models/         # MongoDB schemas
│   ├── routes/         # API routes
│   ├── socket/         # Socket.IO configuration
│   ├── utils/          # Utility functions
│   └── server.js       # Entry point
├── frontend/
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── context/    # React context providers
│   │   ├── hooks/      # Custom React hooks
│   │   ├── pages/      # Route components
│   │   ├── utils/      # Helper functions
│   │   └── zustand/    # State management
│   └── ...
└── package.json
```

## 🔧 Available Scripts

- `npm run start` - Start the production server
- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build both frontend and backend for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

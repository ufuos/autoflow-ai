# 🚀 AutoFlow AI Server

Production-ready AI Automation Backend built with:

- Node.js
- Express
- MongoDB
- JWT Authentication
- OpenAI Integration
- Docker Support
- Render Deployment Ready

---

## 🌍 Features

- User Registration & Login
- JWT Authentication
- Protected Routes
- OpenAI AI Response Generator
- MongoDB Log Persistence
- Dockerized Environment
- Render Deployment Config

---

## ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/autoflow-ai-server.git
cd autoflow-ai-server
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
OPENAI_API_KEY=your_openai_key
CLIENT_URL=http://localhost:3000
```

### 4️⃣ Run Locally

```bash
npm start
```

---

## 🐳 Run With Docker

```bash
docker-compose up --build
```

API: http://localhost:5000  
MongoDB: localhost:27017

---

## 📡 API Endpoints

### Auth
- POST /api/auth/register
- POST /api/auth/login

### User
- GET /api/users/profile

### AI
- POST /api/ai/generate

### Logs
- GET /api/logs

---

## 🚀 Deploy on Render

1. Push to GitHub
2. Create new Web Service on Render
3. Connect repo
4. Add environment variables
5. Deploy 🎉

---

## 🧠 Architecture

MVC Pattern:
- Models
- Controllers
- Routes
- Middleware
- Config

---

## 🔐 Security

- JWT Auth
- Password Hashing (bcrypt)
- Helmet Security
- CORS Protection
- Central Error Handler

---

## 👨‍💻 Author

Built for production-ready automation systems.

---

## 📄 License

MIT
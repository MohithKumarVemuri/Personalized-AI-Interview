# 🎯 Personalized AI Interview Platform

An intelligent AI-powered interview system that simulates real technical interviews with voice interaction, resume-based questions, and instant feedback.

---

## 🚀 Features

* 🎤 Voice-based interview interaction
* 📄 Resume analysis and personalized questions
* 💻 Live coding evaluation
* 🤖 AI-generated feedback (Gemini API)
* 📊 Performance scoring system
* 🔐 Secure authentication (JWT)

---

## 🧠 How It Works

1. Upload your resume
2. Select role & difficulty
3. AI generates tailored questions
4. Answer via text/voice/code
5. Receive real-time AI feedback

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Axios
* Tailwind / CSS

### Backend

* Node.js
* Express.js
* MongoDB (Atlas)

### AI & APIs

* Google Gemini API
* AssemblyAI (speech-to-text)
* Murf AI (text-to-speech)

---

## ⚙️ Setup Instructions

### 1. Clone repo

```bash
git clone https://github.com/MohithKumarVemuri/Personalized-AI-Interview.git
cd Personalized-AI-Interview
```

---

### 2. Backend setup

```bash
cd server
npm install
```

Create `.env`:

```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret
GEMINI_API_KEY=your_key
MURF_API_KEY=your_key
ASSEMBLYAI_API_KEY=your_key
CLIENT_URL=http://localhost:5173
```

Run:

```bash
npm start
```

---

### 3. Frontend setup

```bash
cd client
npm install
npm run dev
```

---

## 📸 Screenshots

*Add your UI screenshots here*

---

## 🧑‍💻 Author

**Mohith Kumar Vemuri**

---

## ⭐ Future Improvements

* Real-time interview analytics
* Multi-language support
* Interview recording playback
* Company-specific interview modes

---

## 📌 License

This project is for educational and demonstration purposes.

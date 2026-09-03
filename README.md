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

## 🌐 Hosting & Deployment

### Step 1: Database Setup (MongoDB Atlas - Free Forever)
1. Create a free **M0 Cluster** on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Under **Network Access**, add IP `0.0.0.0/0` (allow access from anywhere).
3. Under **Database Access**, create a user and password.
4. Copy the connection string (`mongodb+srv://...`).

---

### Option A: 100% Free All-in-One Vercel Deployment (Recommended)
You can deploy **both Frontend and Backend together in one single Vercel project** for free:

1. Sign in to [Vercel](https://vercel.com/) with GitHub.
2. Click **Add New...** → **Project**.
3. Import `Personalized-AI-Interview`.
4. Leave **Root Directory** as `./` (default repository root).
5. In **Environment Variables**, add:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Random 32+ character string
   - `GEMINI_API_KEY`: Google Gemini API key
   - `MURF_API_KEY`: Murf AI API key
   - `ASSEMBLYAI_API_KEY`: AssemblyAI API key
   - `NODE_ENV`: `production`
6. Click **Deploy**. Vercel will build both the frontend and backend together!

---

### Option B: Decoupled Deployment (Render Backend + Vercel Frontend)
1. **Backend on Render**:
   - Create a Web Service on [Render](https://render.com/) with Root Directory `server`.
   - Add environment variables (`MONGODB_URI`, `JWT_SECRET`, `GEMINI_API_KEY`, `MURF_API_KEY`, `ASSEMBLYAI_API_KEY`, `CLIENT_URL`).
2. **Frontend on Vercel**:
   - Create a Project on [Vercel](https://vercel.com/) with Root Directory `client`.
   - Add `VITE_API_URL` pointing to your Render backend URL.

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

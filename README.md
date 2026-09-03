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

### 1. Database (MongoDB Atlas)
1. Create a free **M0 Cluster** on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Under **Network Access**, add IP `0.0.0.0/0` (allow access from anywhere).
3. Under **Database Access**, create a user and password.
4. Copy the connection string (`mongodb+srv://...`).

### 2. Backend Deployment (Render)
1. Sign in to [Render](https://render.com/) and click **New +** → **Web Service**.
2. Connect this repository.
3. Configure settings:
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. Set Environment Variables:
   - `MONGODB_URI`: Your MongoDB Atlas URI
   - `JWT_SECRET`: Random 32+ character secret
   - `GEMINI_API_KEY`: Google Gemini API key
   - `MURF_API_KEY`: Murf AI API key
   - `ASSEMBLYAI_API_KEY`: AssemblyAI API key
   - `CLIENT_URL`: Your Vercel frontend URL (e.g. `https://your-frontend.vercel.app`)
   - `NODE_ENV`: `production`
5. Deploy and copy your backend URL (e.g., `https://your-backend.onrender.com`).

### 3. Frontend Deployment (Vercel)
1. Sign in to [Vercel](https://vercel.com/) and click **Add New** → **Project**.
2. Import this repository.
3. Configure settings:
   - **Root Directory**: `client`
   - **Framework Preset**: `Vite`
4. Set Environment Variable:
   - `VITE_API_URL`: Your Render backend URL (e.g. `https://your-backend.onrender.com`)
5. Deploy!
6. Update `CLIENT_URL` in your Render backend settings to match your new Vercel domain.

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

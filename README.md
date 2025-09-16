# 🎯 Quiz App (UI Challenge)

A simple and interactive quiz application built with **React**, **Zustand**, and **Tailwind CSS**.  
Users can answer multiple-choice questions and view their score with instant feedback.

---

## 🚀 Features

- ✅ Responsive and clean UI with Tailwind CSS
- ✅ Multiple-choice questions
- ✅ State management using Zustand
- ✅ Score tracking with dynamic color feedback (green/red)
- ✅ Component-based architecture (`QuestionCard`, `Results`, etc.)

---

## 🛠️ Tech Stack

- **React** – UI library
- **TypeScript** – Type safety
- **Zustand** – Lightweight state management
- **Tailwind CSS** – Utility-first styling
- **Vite** – Fast build tool

---

## 📂 Project Structure

```text
quiz-app/
├── node_modules/          # Dependencies
├── public/                # Public assets
├── src/                   # Source code
│   ├── components/        # Reusable UI components
│   │   ├── index.ts
│   │   ├── QuestionCard.tsx
│   │   └── ResultSummary.tsx
│   │
│   ├── contexts/          # store
│   │   └── useQuestionStore.ts
│   │
│   ├── data/              # Offline data
│   │   └── questions.json
│   │
│   ├── App.tsx            # Root component
│   ├── index.css          # Global styles
│   ├── main.tsx           # Entry point
│   └── vite-env.d.ts      # Vite TypeScript types
│
├── .gitignore
├── eslint.config.js
├── index.html             # Main HTML file
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts         # Vite configuration


---
```

## ⚡ Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/priyansudash1999/Quiz-App
cd quiz-app
```

### 2️⃣ Install dependencies

```javascript
npm install
```

### 3️⃣ Run locally

```javascript
npm run dev
```

### 4️⃣ Build for production

```javascript
npm run build
```

## Project ScreenShots

![img1](./src/assets/img1.png)
![img2](./src/assets/img2.png)
![img3](./src/assets/img3.png)
![img4](./src/assets/img4.png)
![img5](./src/assets/img5.png)
![img6](./src/assets/img6.png)

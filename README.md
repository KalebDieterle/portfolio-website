# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS to showcase my projects, skills, and education as a Computer and Data Science student.

## ✨ Features

- **Responsive Design** - Looks great on desktop, tablet, and mobile devices
- **Modern UI** - Clean, professional design with smooth animations using DaisyUI components
- **Skills Showcase** - Organized display of frontend and backend skills
- **Project Gallery** - Highlights of key projects with technology tags
- **Education Timeline** - Academic background and relevant coursework
- **Typewriter Effect** - Dynamic text animations for an engaging user experience

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- **Runtime:** [React 19](https://react.dev/)

## 📁 Project Structure

```
app/
├── components/         # Reusable UI components
│   ├── sections/       # Page sections (Skills, Projects, Education, Footer)
│   └── icons/          # Icon components
├── data/               # Portfolio content data
├── hooks/              # Custom React hooks
├── layout.tsx          # Root layout
└── page.tsx            # Home page
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

## 🎨 Customization

Portfolio content can be easily updated by modifying the data files in `app/data/portfolio-data.ts`, including:

- Skills and technologies
- Education history
- Project information

## 📄 License

This project is for personal use.

# 🏦 Comparateur — Moroccan Bank Offers Comparator

A clean, responsive web application built with **React** and **Tailwind CSS** that lets users compare banking offers from major Moroccan banks side by side.

---

## ✨ Features

- 📊 Compare offers from multiple Moroccan banks (Attijariwafa Bank, BMCE Bank, Bank Africa, CIH)
- 🃏 Card-based offer display with key details at a glance
- 💡 Detailed info view via modal dialogs
- 🎁 Bonus highlights per offer
- ⚡ Fast development experience powered by Vite with HMR

---

## 🛠️ Tech Stack

| Tool                                     | Version | Purpose                 |
| ---------------------------------------- | ------- | ----------------------- |
| [React](https://react.dev/)              | ^19.2.5 | UI framework            |
| [Vite](https://vite.dev/)                | ^8.0.9  | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.2.3  | Utility-first styling   |
| [Lucide React](https://lucide.dev/)      | ^1.3.0  | Icon library            |

---

## 📁 Project Structure

```
comparateur/
├── public/
│   ├── images/               # Bank logo assets
│   │   ├── attijariwafa bank.png
│   │   ├── bank_africa.png
│   │   ├── bmce bank.png
│   │   └── cih.jpg
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/               # Static assets (hero image, etc.)
│   │
│   ├── components/           # Feature components
│   │   ├── Bonus.jsx         # Bonus/reward display
│   │   ├── Card.jsx          # Bank offer card
│   │   ├── Info.jsx          # Offer detail info
│   │   └── OffersCard.jsx    # Offers listing container
│   │
│   ├── data/
│   │   └── offers.js         # Static bank offer data
│   │
│   ├── ui/                   # Reusable UI primitives
│   │   ├── Button.jsx
│   │   ├── Headding.jsx
│   │   ├── Image.jsx
│   │   └── Modal.jsx
│   │
│   ├── App.jsx               # Root application component
│   ├── index.css             # Global styles
│   └── main.jsx              # App entry point
│
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd comparateur

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 🧹 Linting

```bash
npm run lint
```

ESLint is configured with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh` for React best practices.

---

## 📄 License

This project is private. All rights reserved.

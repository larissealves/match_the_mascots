# 🧾 Project Documentation – "Match the Mascots"

## 📌 Project Overview
**"Match the Mascots"** is a cozy memory game where users can send secret messages that are revealed only after completing a matching board.  
It’s lightweight, ad-free, and fully client-side — no login, no database.

[Match the Mascots Link](https://match-the-mascots.vercel.app/)
---

## ▶️ How to Run Locally

### ✅ Requirements
- Node.js (v16 or higher)
- npm or yarn

### 🚀 Installation & Start

```bash
# 1. Enter the project directory
cd match-the-mascots

# 2. Install dependencies
npm install
# or
yarn

# 3. Start the development server
npm run dev
# or
yarn dev
```

After that, visit **[http://localhost:5173](http://localhost:5173)** in your browser.

---

## 🧰 Tools & Libraries Used

| Feature            | Description                                                                |
|--------------------|----------------------------------------------------------------------------|
| **React**          | Core UI library using function components and hooks                        |
| **Vite**           | Fast bundler and dev server                                                |
| **React Router DOM** | For routing between pages (`/`, `/credits`, `/view-message`, etc.)      |
| **Static Assets**  | Mascot images and sound effects loaded with `import.meta.glob()`           |
| **Custom CSS**     | Hand-written CSS with modular styles per page/component                    |
| **No Backend**     | All message data is encoded in the URL itself via `btoa()` and `atob()`    |

---

## 📦 Features Description

### 🖼️ Static Assets
- Located in `/src/assets/images/board-itens/`
- Mascot images dynamically imported and rendered in the game grid

### 📄 Pages (Routing)

| Route               | Purpose                                                   |
|---------------------|-----------------------------------------------------------|
| `/`                 | Home page with the memory board and message creator       |
| `/view-message`     | Shows a secret message after the game is completed        |
| `/credits`          | Project credits, developer notes, and resources           |
| `/mascot-gallery`   | Visual gallery of all mascot assets used in the game      |

### 💌 Message Encoding
- Messages are serialized using:
  ```js
  btoa(JSON.stringify({ title, message, squares }))
  ```
- Passed through query params like:
  ```
  /view-message?data=ENCODED_STRING
  ```

### 🌟 Visual Effects
- **Shine burst animation** triggered on win using dynamic DOM creation (`createShineBurst`)
- **Animated floating clouds** as ambient UI elements

### 📱 Responsive Design
- Fully responsive layout using CSS media queries
- Optimized for tablets and mobile devices
- Adjusts board columns and message input layout accordingly

---

## 💡 Developer Notes
- This project is **100% front-end**, no backend or server-side logic
- Messages are shareable through URLs — **only those with the link can view them**
- All images and sound effects are **locally bundled**, no CDN or external requests

---

> Made with 💜 for fun, creativity, and cozy digital messages.

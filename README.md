# 🧸 Match the Mascots

A customizable and adorable memory game inspired by mascots from Thai BL series (like those from GMMTV). This project allows users to create hidden messages that can only be revealed by completing a mascot-matching game.

## ✨ Features

- 🧩 Memory game with randomized mascot cards
- 💌 Send a secret message that is only revealed after completing the board
- 🌈 Pastel & cozy aesthetic
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🚫 No login, ads, or data collection
- 🔐 Encoded URLs for private message sharing
- 🧠 Built for fun, fandom, and creative gifting

## 📦 Live Demo

👉 [Try it live](https://match-the-mascots-for-sale.vercel.app)

---

## 🚀 How to Use

### 📝 Sending a Message

1. Fill in the form with:
   - A title
   - Your message (up to 500 characters)
   - Number of mascot cards (must be an even number)
2. Click **Send Message**.
3. A private link will be generated.
4. Share this link with someone — they’ll only see the message after completing the game!

### 🎮 Viewing a Message

- Visit the generated link.
- Match all mascot pairs to reveal the hidden message!

---

## 🛠️ Tech Stack

- **React** – front-end framework
- **Vite** – blazing-fast build tool
- **React Router** – navigation and URL handling
- **CSS3** – handcrafted styling with a soft, pastel aesthetic
- **Base64** – encoding message data into the URL

---

## 📁 Project Structure

```
📦 src/
 ┣ 📂assets/
 ┃ ┗ 📂images/board-itens/        # All mascot and card images
 ┣ 📂components/
 ┃ ┣ Board.jsx                   # Memory game logic
 ┃ ┣ NewMessage.jsx              # Message sending form
 ┃ ┣ ViewMessage.jsx             # Message reveal screen
 ┃ ┗ PopupSupportDeveloper.jsx   # Optional support popup
 ┣ 📂styles/                      # CSS files
 ┣ 📂utils/
 ┃ ┗ createShine.js              # Sparkle animation effect
 ┣ App.jsx
 ┣ main.jsx
 ┣ Router.jsx
```

---

## 🔐 Security & Privacy

- No data is stored on a server.
- Messages are encoded directly into the URL using Base64.
- Users are advised **not to share sensitive or private information**, as the link can be decoded.

---

## 📦 Installation (Local Setup)

```bash
git clone https://github.com/larissealves/match_the_mascots.git
cd match_the_mascots
npm install
npm run dev
```

Access the app at: [http://localhost:5173](http://localhost:5173)

---

## 📌 Use Cases

- Send cute love notes
- Share invitations for BL watch parties
- Gift interactive messages to fans
- Customize with mascots from your favorite shows!

---

## 💬 Customization

- You can add or replace mascot images in `src/assets/images/board-itens/`
- The game automatically detects and loads all `.png` files (excluding `cloud.png` for the back of cards)
- Message and title inputs can be styled or validated further in `NewMessage.jsx`

---

## 🎨 Inspiration

This fan-made project was lovingly built by **Larisse Alves**, inspired by the **BL fandom** and the cute mascot trend in Thai series (especially GMMTV).

---

## 🖼️ Screenshots
<img src="https://github.com/larissealves/match_the_mascots-for-sale/blob/main/public/Screenshots/img-01.png"  />
<img src="https://github.com/larissealves/match_the_mascots-for-sale/blob/main/public/Screenshots/img-02.png"  />
<img src="https://github.com/larissealves/match_the_mascots-for-sale/blob/main/public/Screenshots/img-03.png"  />

---

## ☕ Support

If this brought a smile to your day, consider supporting the developer:

- 💌 **PayPal/PIX**: alves.larisser@gmail.com  
- 🌍 **Wise**: larisser4  
- 🔗 [Linktree](https://linktr.ee/larisseralves)

---

## 📝 License

This project is available for personal and educational use. For commercial licensing, please contact the author.

---

## 💡 Suggestions?

Got an idea for a feature or a new theme? Feel free to open an issue or reach out. Your feedback is always welcome!

---

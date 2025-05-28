import React from 'react';
import '../src/styles/credits.css'; // reutiliza os estilos da página de créditos

export default function ProjectDocs() {
  return (
    <div className="credits-page">
      <div className="credits-content">
        <h1 className="credits-title">🧾 Project Documentation – "Match the Mascots"</h1>

        <section className="section">
          <h2>📌 Project Overview</h2>
          <p>
            "Match the Mascots" is a cozy memory game where users can send secret messages that are revealed only after completing a matching board. It’s lightweight, ad-free, and fully client-side — no login, no database.
          </p>
        </section>

        <section className="section">
          <h2>▶️ How to Run Locally</h2>
          <p><strong>Requirements:</strong></p>
          <ul>
            <li>Node.js (v16 or higher)</li>
            <li>npm or yarn</li>
          </ul>
          <p><strong>Installation & Start:</strong></p>
          <pre>
{`# 1. Enter the project directory
cd match-the-mascots

# 2. Install dependencies
npm install
# or
yarn

# 3. Start the development server
npm run dev
# or
yarn dev`}
          </pre>
          <p>Then open <strong>http://localhost:5173</strong> in your browser.</p>
        </section>

        <section className="section">
          <h2>🧰 Tools & Libraries Used</h2>
          <ul>
            <li><strong>React</strong> — UI components and logic</li>
            <li><strong>Vite</strong> — Fast development build tool</li>
            <li><strong>React Router DOM</strong> — Page routing</li>
            <li><strong>Static Assets</strong> — Mascots and sounds via <code>import.meta.glob()</code></li>
            <li><strong>Custom CSS</strong> — Organized by page/component</li>
            <li><strong>No Backend</strong> — Messages stored directly in URLs</li>
          </ul>
        </section>

        <section className="section">
          <h2>📦 Features Description</h2>
          <ul>
            <li>🖼️ <strong>Static Assets:</strong> stored in <code>/src/assets/images/board-itens/</code></li>
            <li><strong>Routing:</strong> 
              <ul>
                <li><code>/</code> → Home (game + message form)</li>
                <li><code>/view-message</code> → View hidden message after game</li>
                <li><code>/credits</code> → Project credits</li>
                <li><code>/mascot-gallery</code> → All mascots</li>
              </ul>
            </li>
            <li>💌 <strong>Message Encoding:</strong> messages encoded with <code>btoa()</code> and passed via URL</li>
            <li>🌟 <strong>Visual Effects:</strong> shine burst, animated clouds</li>
            <li>📱 <strong>Responsive Design:</strong> mobile-first, board adapts</li>
          </ul>
        </section>

        <section className="section">
          <h2>🌐 Live Demo</h2>
          <p>
            Test the app here:{" "}
            <a className="link-neon" href="https://match-the-mascots.vercel.app/" target="_blank" rel="noopener noreferrer">
              https://match-the-mascots.vercel.app/
            </a>
          </p>
        </section>

        <footer>
          <p>Made with 💜 to spread smiles through playful experiences.</p>
        </footer>
      </div>
    </div>
  );
}

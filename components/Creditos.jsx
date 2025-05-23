import React from 'react';
import { Link } from 'react-router-dom';
import '../src/styles/creditos.css';

export default function Credits() {
  return (

    <div className="pagina-creditos">
      <div className="conteudo-creditos">
      <section className="sessao">
        <Link
          to="/mascot-gallery"
          target="_blank"
          className="link-neon"
        >
          Mascot Gallery →
        </Link>
      </section>
        <h1 className="titulo-creditos">Credits & Inspiration</h1>
        <p className="subtitulo-creditos">Project by Larisse Alves </p>

        <p className="descricao-projeto">
          This project is a fun and cozy memory game featuring BL mascots, created to send and receive special messages in a playful way.
          No ads, no login, no distractions — just a cute experience designed to bring smiles and connection through game and message sharing.
        </p>

        <div className="tag-dev">
          🚫 This project is archived and will not receive further updates.
          <p>You can still enjoy it as it is. 💜</p>
        </div>

        <section className="sessao">
          <a
            className="link-neon"
            href="https://linktr.ee/larisseralves"
            target="_blank"
            rel="noopener noreferrer"
          >
            Larisse Alves – My Linktree
          </a>
        </section>

        <section className="sessao">
          <h2>🧠 Tips & Good Practices</h2>
          <ul>
            This is a simple and independent project created for fun, messages, and cozy interactions. Please remember: 
            <li>⚠️ Do not share sensitive data, passwords, personal secrets, or confidential information. </li>
            <li>💌 This tool works by generating a link that contains your message.</li>
            <li>🗂️ No data is stored. There's no database, no login, no account — everything lives inside the link you create.</li>
            <li>🔒 Only people who have the link can open and view the message.</li>
            <li>🎯 Use it for sending cute notes, greetings, or fun games — not for sensitive information.</li>
            Enjoy it responsibly, with love and kindness. 💜✨
          </ul>
        </section>


        <section className="sessao">
          <h2>🛠️ Technologies Used</h2>
          <ul className="tech-list">
            <li><strong>React</strong> — UI and component-based framework</li>
            <li><strong>Vite</strong> — Build tool for fast development</li>
            <li><strong>CSS3</strong> — Custom styles</li>
            <li><strong>React Router</strong> — Page navigation</li>
          </ul>
        </section>

        <section className="sessao">
          <h2>🎯 To-do & Upcoming Features</h2>
          <ul>
            <li>✨ Add mascot categorization by group/brand</li>
            <li>🎨 Polish UI/UX details and responsive behavior</li>
            <li>🌐 Add bilingual support (PT ↔ EN)</li>
            <li>📱 Improve mobile layout and scaling</li>
            <li>♿ Add accessibility improvements</li>
            <li>🖼️ Expand mascot collection and assets</li>
          </ul>
        </section>

        <section className="sessao">
          <h2>🎬 Inspired by</h2>
          <p>
            This project is inspired by the BL community, fan culture, and the joy of games that connect people.
            Special thanks to Thai series aesthetics, fandom creativity, and cozy playful interfaces online.
          </p>
          <ul>
            <li>
              <a href="https://www.instagram.com/gmmtv/" className="link-neon" target="_blank" rel="noreferrer">@gmmtv and ...</a>
            </li>
          </ul>
        </section>

        <section className="sessao">
          <h2>🎧 Resources & Assets</h2>
          <ul>
            <li>
              Alarm sound from: <a href="https://pixabay.com/pt/music/search/alarm/?pagi=3" className="link-neon" target="_blank" rel="noreferrer">Pixabay Music</a>
            </li>
            <li>
              AI-generated visuals provided by <strong>ChatGPT</strong> image tools
            </li>
          </ul>
        </section>

        <section className="sessao">
          <h2>☕ Support the Developer</h2>
          <p>
            If this project brought a smile to your day, feel free to support with a coffee 💜.
          </p>
          <ul>
            <li>💌 PayPal: <strong>alves.larisser@gmail.com</strong></li>
            <li>🌍 Wise: <strong>larisser4</strong></li>
          </ul>
          <p>Any support is truly appreciated and helps me continue building cozy tools like this one. ✨</p>
        </section>

        <section className="sessao">
          <Link to="/" className="link-neon">← Back to Home</Link>
        </section>

        <footer>
          <p>Made with 💜 for fun, connection, and creativity.</p>
        </footer>
      </div>
    </div>
  );
}
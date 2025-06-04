import React from 'react';
import { Link } from 'react-router-dom';
import '../src/styles/credits.css';

export default function Credits() {
  return (
    <div className="credits-page">
      <div className="credits-content">
        
        {/* Link to mascot gallery */}
        <section className="section">
          <Link
            to="/mascot-gallery"
            target="_blank"
            className="highlighted-link"
          >
            Mascot Gallery →
          </Link>
        </section>

        <section className="section">
          <Link
            to="/ProjectDocs"
            target="_blank"
            className="highlighted-link"
          >
            Project Docs →
          </Link>
        </section>

        {/* Main title and subtitle */}
        <h1 className="credits-title">Credits & Inspiration</h1>
        <p className="credits-subtitle">Project by ********</p>

        {/* Project description */}
        <p className="project-description">
          This project is a fun and cozy memory game featuring BL mascots,
          created to send and receive special messages in a playful way.
          No ads, no login, no distractions — just a cute experience
          designed to bring smiles and connection through game and message sharing.
        </p>

        {/* Developer notice */}
        <div className="dev-tag">
          🚫 This project is archived and will not receive further updates.
          <p>You can still enjoy it as it is. 💜</p>
        </div>

        {/* Developer link */}
        <section className="section">
          <a
            className="highlighted-link"
            href="********"
            target="_blank"
            rel="noopener noreferrer"
          >
            ******** – My GitHub
          </a>
        </section>

        {/* Tips & good practices */}
        <section className="section">
          <h2>🧠 Tips & Good Practices</h2>
          <ul>
            <li>⚠️ Do not share sensitive data, passwords, personal secrets, or confidential information.</li>
            <li>💌 This tool works by generating a link that contains your message.</li>
            <li>🗂️ No data is stored. There's no database, no login, no account — everything lives inside the link you create.</li>
            <li>🔒 Only people who have the link can open and view the message.</li>
            <li>🎯 Use it for sending cute notes, greetings, or fun games — not for sensitive information.</li>
            Enjoy it responsibly, with love and kindness. 💜✨
          </ul>
        </section>

        {/* Technologies used */}
        <section className="section">
          <h2>🛠️ Technologies Used</h2>
          <ul className="tech-list">
            <li><strong>React</strong> — UI and component-based framework</li>
            <li><strong>Vite</strong> — Build tool for fast development</li>
            <li><strong>CSS3</strong> — Custom styles</li>
            <li><strong>React Router</strong> — Page navigation</li>
          </ul>
        </section>

        {/* To-do list */}
        <section className="section">
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

        {/* Project inspiration */}
        <section className="section">
          <h2>🎬 Inspired by</h2>
          <p>
            This project is inspired by the BL community, fan culture,
            and the joy of games that connect people. Special thanks to
            Thai series aesthetics, fandom creativity, and cozy playful interfaces online.
          </p>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/gmmtv/"
                className="highlighted-link"
                target="_blank"
                rel="noreferrer"
              >
                @gmmtv and ...
              </a>
            </li>
          </ul>
        </section>

        {/* Resources used */}
        <section className="section">
          <h2>🎧 Resources & Assets</h2>
          <ul>
            <li>
              Alarm sound from:{" "}
              <a
                href="https://pixabay.com/pt/music/search/alarm/?pagi=3"
                className="highlighted-link"
                target="_blank"
                rel="noreferrer"
              >
                Pixabay Music
              </a>
            </li>
            <li>
              AI-generated visuals provided by <strong>ChatGPT</strong> image tools
            </li>
          </ul>
        </section>

        {/* Support section */}
        <section className="section">
          <h2>☕ Support the Developer</h2>
          <p>If this project brought a smile to your day, feel free to support with a coffee 💜.</p>
          <ul>
            <li>💌 PayPal and PIX: <strong>alves.larisser@gmail.com</strong></li>
            <li>🌍 Wise: <strong>larisser4</strong></li>
          </ul>
          <p>Any support is truly appreciated and helps me continue building cozy tools like this one. ✨</p>
        </section>

        {/* Back to home */}
        <section className="section">
          <Link to="/" className="highlighted-link">← Back to Home</Link>
        </section>

        {/* Footer */}
        <footer>
          <p>Made with 💜 for fun, connection, and creativity.</p>
        </footer>
      </div>
    </div>
  );
}

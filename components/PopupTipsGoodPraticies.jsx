import React from 'react';
import '../src/styles/modal-conf.css';

function PopupSupportDeveloper({ onClose }) {
  return (
    <div className="modal-overlay modal-sessao-finalizada">
      <div className="modal">
        <h2>🧠 Tips & Good Practices</h2>

        <section className="sessao">
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

        <div className="footer" style={{ marginTop: '24px' }}>
          <button className="btn-primario" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopupSupportDeveloper;

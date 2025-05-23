import React from 'react';
import '../src/styles/modal-conf.css';

function PopupSupportDeveloper({ onClose }) {
  return (
    <div className="modal-overlay modal-sessao-finalizada">
      <div className="modal">
        <h2>💜 Support the Developer</h2>

        <p>Made by a developer who loves creating cozy, ad-free spaces for everyone. If this project made your day better, feel free to support with a coffee ☕. </p>
        <p> Your support truly makes a difference! 💜</p>

        <ul style={{ lineHeight: '1.8', marginTop: '12px' }}>
          <li>💌 <strong>PayPal and PIX:</strong> alves.larisser@gmail.com</li>
          <li>🌍 <strong>Wise:</strong> larisser4</li>
        </ul>

        <p style={{ marginTop: '20px' }}>
          You can also find me here: <br />
          <a
            className="link-neon"
            href="https://linktr.ee/larisseralves"
            target="_blank"
            rel="noopener noreferrer"
          >
            🌐 Larisse Alves – Linktree
          </a>
        </p>

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

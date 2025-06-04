import React from 'react';
import '../src/styles/popup-conf.css';

function PopupSupportDeveloper({ onClose }) {
  return (
    <div className="popup-background">
      <div className="popup">

        {/* popup Title */}
        <h2>💜 Support the Developer</h2>

        {/* Support message */}
        <p>
          Made by a developer who loves creating cozy, ad-free spaces for everyone.
          If this project made your day better, feel free to support with a coffee ☕.
        </p>
        <p>Your support truly makes a difference! 💜</p>

        {/* Payment options */}
        <ul style={{ lineHeight: '1.8', marginTop: '12px' }}>
          <li>💌 <strong>PayPal and PIX:</strong> ********</li>
          <li>🌍 <strong>Wise:</strong> ********</li>
        </ul>

        {/* External link */}
        <p style={{ marginTop: '20px' }}>
          You can also find me here: <br />
          <a
            className="highlighted-link"
            href="********"
            target="_blank"
            rel="noopener noreferrer"
          >
            🌐 ******** – GitHub
          </a>
        </p>

        {/* popup footer with Close button */}
        <div className="footer" style={{ marginTop: '24px' }}>
          <button className="primary-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopupSupportDeveloper;

import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Board from './Board';
import '../src/styles/viewMessage.css';

export default function ViewMessage() {
  const [searchParams] = useSearchParams();
  const encodedData = searchParams.get('data');
  const [showMessageWin, setShowMessageWin] = useState(false);

  const handleWin = () => {
    setShowMessageWin(true);
  };

  // Default values
  let title = '';
  let message = '';
  let squares = 12;

  // Decode the base64-encoded message from URL
  if (encodedData) {
    try {
      const decoded = atob(encodedData);
      const payload = JSON.parse(decoded);
      title = payload.title || title;
      message = payload.message || message;
      squares = Number(payload.squares) || squares;
    } catch (error) {
      console.error('Invalid data in URL', error);
    }
  }

  return (
    <div>
      {/* === Header section === */}
      <div className="title-main">
        <h1 className="message-title">💌 Message For You</h1>
        <p className="subtitle">✨ You received a special message ✨</p>
      </div>

      {/* === Floating clouds for background effect === */}
      <div className="cloud" style={{ left: '10%', animationDelay: '0s' }}></div>
      <div className="cloud" style={{ left: '30%', animationDelay: '2s' }}></div>
      <div className="cloud" style={{ left: '50%', animationDelay: '4s' }}></div>
      <div className="cloud" style={{ left: '70%', animationDelay: '1s' }}></div>
      <div className="cloud" style={{ left: '90%', animationDelay: '3s' }}></div>

      {/* === Main content: game + message reveal === */}
      <div className="container-main">
        {/* Memory game board */}
        <Board onWin={handleWin} forcedSquares={squares} />

        {/* Message display */}
        <div className="message-card">
          {showMessageWin ? (
            <div className="message-reveal">
              <h2 className="message-title">💌 {title}</h2>
              <p className="message-text">{message}</p>
            </div>
          ) : (
            <div className="message-locked">
              <p>🔒 Complete the game to unlock your special message.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

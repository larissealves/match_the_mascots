import { useState } from 'react';
import { Link } from 'react-router-dom';
import NewMessage from './components/NewMessage';
import Board from './components/Board';
import PopupSupportDeveloper from './components/PopupSupportDeveloper';
import PopupTipsGoodPraticies from './components/PopupTipsGoodPraticies';
import './src/styles/base.css';

function App() {
  const [varPopupSupportDeveloper, setPopupSupportDeveloper] = useState(false);
  const [varPopupTipsGoodPraticies, setPopupTipsGoodPraticies] = useState(false);

  const handleWin = () => {
    // Placeholder: You may implement additional behavior on win
    console.log('Game completed!');
  };

  return (
    <div>
      {/* === Top Buttons Section === */}
      <div className="info-buttons-container">
        
        {/* Tips & Good Practices Button */}
        <button
          className="donation-button"
          onClick={() => setPopupTipsGoodPraticies(true)}
          title="Tips & Good Practices"
        >
          🧠 Tips & Good Practices
        </button>
        {varPopupTipsGoodPraticies && (
          <PopupTipsGoodPraticies onClose={() => setPopupTipsGoodPraticies(false)} />
        )}

        {/* Support Button */}
        <button
          className="donation-button"
          onClick={() => setPopupSupportDeveloper(true)}
          title="Support the developer"
        >
          ☕ Support
        </button>
        {varPopupSupportDeveloper && (
          <PopupSupportDeveloper onClose={() => setPopupSupportDeveloper(false)} />
        )}

        {/* Credits Link */}
        <Link
          to="/credits"
          target="_blank"
          className="donation-button"
        >
          💡 Credits
        </Link>
      </div>

      {/* === Page Title === */}
      <div className="title-main">
        <h1>Match the Mascots</h1>
        <p className="subtitle">
          A cute memory game with BL mascots — create and send secret messages
          that can only be revealed by matching all the pairs.
        </p>
      </div>

      {/* === Decorative Clouds === */}
      <div className="container-cloud-main">
        <div className="cloud" style={{ left: '10%', animationDelay: '0s' }}></div>
        <div className="cloud" style={{ left: '30%', animationDelay: '2s' }}></div>
        <div className="cloud" style={{ left: '50%', animationDelay: '4s' }}></div>
        <div className="cloud" style={{ left: '70%', animationDelay: '1s' }}></div>
        <div className="cloud" style={{ left: '90%', animationDelay: '3s' }}></div>
      </div>

      {/* === Main Game & Message Composer === */}
      <div className="container-main">
        <div className="shine"></div> {/* Visual effect */}
        <Board onWin={handleWin} />
        <NewMessage />
      </div>
    </div>
  );
}

export default App;

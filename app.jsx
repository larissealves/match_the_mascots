import { useState } from 'react';
import { Link } from 'react-router-dom';
import NewMessage from './components/NewMessage';
import Board from './components/Board';
import PopupSupportDeveloper from './components/PopupSupportDeveloper';
import './src/styles/base.css'

function App() {
  const [varPopupSupportDeveloper, setPopupSupportDeveloper] = useState(false)

  const handleWin = () => {
    setShowMessageWin(true);
  };

  return (
    <div>
      <div className='container-botoes-mais-informacoes'>
        <button
          className="btn-creditos doacao"
          onClick={() => setPopupSupportDeveloper(true)}
          title="Support the developer"
        >
          ☕ Support
        </button>
        {varPopupSupportDeveloper && (
          <PopupSupportDeveloper onClose={() => setPopupSupportDeveloper(false)} />
        )}

        <Link 
          to="/credits" 
          target="_blank" 
          className="btn-creditos"
        >
          💡 Credits
        </Link>

      </div>
      <div className="title-main">
        <h1 >  Match the Mascots </h1>
        <p className="subtitle"> A cute memory game with BL mascots — create and send secret messages that can only be revealed by matching all the pairs.</p>
      </div>

      <div className="cloud" style={{ left: '10%', animationDelay: '0s' }}></div>
      <div className="cloud" style={{ left: '30%', animationDelay: '2s' }}></div>
      <div className="cloud" style={{ left: '50%', animationDelay: '4s' }}></div>
      <div className="cloud" style={{ left: '70%', animationDelay: '1s' }}></div>
      <div className="cloud" style={{ left: '90%', animationDelay: '3s' }}></div>
        <div className="container-main">
        <div className="shine"></div> 
        <Board onWin={handleWin}/>
        <NewMessage/>
      </div> 
      
    </div>
    
    
  );
}

export default App;

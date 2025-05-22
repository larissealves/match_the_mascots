import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Board from './Board';
import '/src/styles/ViewMessage.css';

export default function ViewMessage() {
    const [searchParams] = useSearchParams();
    const encodedData = searchParams.get('data');

    const [showMessageWin, setShowMessageWin] = useState(false);

    const handleWin = () => {
        setShowMessageWin(true);
    };

    let title = '';
    let message = '';
    let squares = 12;

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
            {/* === Título === */}
            <div className="title-main">
                <h1 className="message-title">💌 Message For You</h1>
                <p className="subtitle">
                    ✨ You received a special message ✨
                </p>
            </div>

            {/* === Nuvens === */}
            <div className="cloud" style={{ left: '10%', animationDelay: '0s' }}></div>
            <div className="cloud" style={{ left: '30%', animationDelay: '2s' }}></div>
            <div className="cloud" style={{ left: '50%', animationDelay: '4s' }}></div>
            <div className="cloud" style={{ left: '70%', animationDelay: '1s' }}></div>
            <div className="cloud" style={{ left: '90%', animationDelay: '3s' }}></div>

            {/* === Conteúdo === */}
            <div className="container-main">
                <Board onWin={handleWin} forcedSquares={squares} />

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

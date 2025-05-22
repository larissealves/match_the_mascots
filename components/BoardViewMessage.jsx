import React, { useEffect, useState, useRef  } from 'react';
import PopupSupportDeveloper from './PopupSupportDeveloper'
import '/src/styles/base.css';
import { createShineBurst } from '/src/utils/createShine';
import shineSound from '/src/assets/sounds/sfx-accent-eye-glitter-tinkle-1-6342.mp3';

import cloud from '/src/assets/images/board-itens/board-item-cloud.png';

export default function Board({onWin}) {
    const [showMessageWin, setShowMessageWin] = useState(false);
    const audioRef = useRef(new Audio(shineSound));
    
    const totalCells = 18; // Sempre número par (5 pares)
    const [varPopupSupportDeveloper, setPopupSupportDeveloper] = useState(false)

    // 🔥 Importa automaticamente todas as imagens .png da pasta
    const images = import.meta.glob('/src/assets/images/board-itens/*.png', {
        eager: true,
    });

    // 🔥 Cria lista das imagens
    const imageList = Object.entries(images).map(([path, module]) => ({
        path,
        url: module.default,
    }));

    // 🔥 Filtra a imagem "cloud" (verso)
    const mascots = imageList
        .filter((img) => !img.path.includes('cloud'))
        .map((img) => img.url);

    const [arrayImages, setArrayImages] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);

    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    useEffect(() => {
        if (mascots.length < totalCells / 2) {
            console.error('⚠️ Não há imagens suficientes para formar os pares!');
            return;
        }

        const selectedImages = shuffleArray(mascots).slice(0, totalCells / 2);
        const pairedImages = [...selectedImages, ...selectedImages];
        const finalBoard = shuffleArray(pairedImages);

        setArrayImages(finalBoard);
    }, []);

    const handleCardClick = (index) => {
        if (flippedCards.includes(index) || matchedCards.includes(index)) {
            console.log('entrouuuu')
            return;
        }

        const newFlipped = [...flippedCards, index];
        setFlippedCards(newFlipped);

        if (newFlipped.length === 2) {
            const [firstIndex, secondIndex] = newFlipped;
            const firstImage = arrayImages[firstIndex];
            const secondImage = arrayImages[secondIndex];

            if (firstImage === secondImage) {
                setMatchedCards((prev) => [...prev, firstIndex, secondIndex]);
                
                console.log(matchedCards.length)
                console.log(totalCells)
                if (matchedCards.length === totalCells - 2) {
                    console.log('jogo finalizado')
                    setShowMessageWin(true);
                    createShineBurst(20);
                    if (audioRef.current) {
                        audioRef.current.loop = true;
                        audioRef.current.play();

                        // Stop sound automatically after 1 minute
                        setTimeout(() => {
                            if (audioRef.current) {
                                audioRef.current.pause();
                                audioRef.current.currentTime = 0;
                            }
                        }, 20000);
                    }

                    if (onWin) {
                        onWin(); 
                    }
                }
                setFlippedCards([]);
            } else {
                setTimeout(() => {
                    setFlippedCards([]);
                }, 1000);
            }
        }
    };

    const isCardFlipped = (index) => {
        return flippedCards.includes(index) || matchedCards.includes(index);
    };

    return (
        <div className="board ">

                { showMessageWin && (
                    <div className='shine'> </div>
                )}

                {arrayImages.map((img, index) => (
                    <div
                        key={index}
                        className="cell"
                        onClick={() => handleCardClick(index)}
                    >
                        <img
                            src={isCardFlipped(index) ? img : cloud}
                            alt="Card"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                borderRadius: '10px',
                                height: isCardFlipped(index) ? '100%' : '80%'  // exemplo de altura diferente
                            }}

                        />
                    </div>
                    
                ))}
            
            {/* <div className='container-botoes-mais-informacoes'>
                <button
                    className="btn-creditos doacao"
                    onClick={() => setPopupSupportDeveloper(true)}
                    title="Support the developer"
                >
                    ☕ Support
                </button>
            </div>  */}
            

            {varPopupSupportDeveloper && (
                <PopupSupportDeveloper onClose={() => setPopupSupportDeveloper(false)} />
            )}

        </div>
    );
}

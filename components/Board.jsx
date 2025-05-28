import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom'; // Optional: Used to get URL parameters (commented out)
import PopupSupportDeveloper from './PopupSupportDeveloper';
import '../src/styles/base.css';

import { createShineBurst } from '../src/utils/createShine';
import shineSound from '../src/assets/sounds/sfx-accent-eye-glitter-tinkle-1-6342.mp3';
import cloud from '../src/assets/images/board-itens/board-item-cloud.png';

export default function Board({ onWin, forcedSquares }) {
    // States
    const [showMessageWin, setShowMessageWin] = useState(false);
    const [arrayImages, setArrayImages] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const audioRef = useRef(new Audio(shineSound));

    // Total number of cells (must be even)
    const totalCells = (forcedSquares > 0 && forcedSquares % 2 === 0) 
        ? forcedSquares 
        : 24;

    // Dynamically import all .png images from the folder
    const images = import.meta.glob('../src/assets/images/board-itens/*.png', {
        eager: true,
    });

    // Create a list of image URLs
    const imageList = Object.entries(images).map(([path, module]) => ({
        path,
        url: module.default,
    }));

    // Filter out the 'cloud' image (used as the card back)
    const mascots = imageList
        .filter((img) => !img.path.includes('cloud'))
        .map((img) => img.url);

    // Shuffle helper function
    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    // Setup board on mount
    useEffect(() => {
        if (mascots.length < totalCells / 2) {
            console.error('⚠️ Not enough images to form pairs!');
            return;
        }

        const selectedImages = shuffleArray(mascots).slice(0, totalCells / 2);
        const pairedImages = [...selectedImages, ...selectedImages];
        const finalBoard = shuffleArray(pairedImages);

        setArrayImages(finalBoard);
    }, []);

    // Handle card click
    const handleCardClick = (index) => {
        if (flippedCards.includes(index) || matchedCards.includes(index)) return;

        const newFlipped = [...flippedCards, index];
        setFlippedCards(newFlipped);

        // Check for match
        if (newFlipped.length === 2) {
            const [firstIndex, secondIndex] = newFlipped;
            const firstImage = arrayImages[firstIndex];
            const secondImage = arrayImages[secondIndex];

            if (firstImage === secondImage) {
                setMatchedCards((prev) => [...prev, firstIndex, secondIndex]);

                if (matchedCards.length === totalCells - 2) {
                    // Game complete
                    setShowMessageWin(true);
                    createShineBurst(20);

                    if (audioRef.current) {
                        audioRef.current.loop = true;
                        audioRef.current.play();

                        // Auto-stop sound after 20 seconds
                        setTimeout(() => {
                            if (audioRef.current) {
                                audioRef.current.pause();
                                audioRef.current.currentTime = 0;
                            }
                        }, 20000);
                    }

                    if (onWin) onWin();
                }
                setFlippedCards([]);
            } else {
                // Flip back after delay if not a match
                setTimeout(() => setFlippedCards([]), 1000);
            }
        }
    };

    const isCardFlipped = (index) =>
        flippedCards.includes(index) || matchedCards.includes(index);

    return (
        <div className="board">
            {showMessageWin && <div className="shine"></div>}

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
                            height: isCardFlipped(index) ? '100%' : '80%',
                        }}
                    />
                </div>
            ))}
        </div>
    );
}

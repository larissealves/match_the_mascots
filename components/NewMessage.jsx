import React, { useEffect, useState } from 'react';


export default function NewMessage ({}) {
    const [amountSquares, SetAumontSquare] = useState(8);
    const [textTitleMessage, setTextTitleMessage] = useState("")
    const [textMessage, setTextMessage] = useState("")
    const [errors, setErrors] = useState({});

     const handleSendMessage = () => {
        // Monta os dados
        const params = new URLSearchParams({
            title: textTitleMessage,
            message: textMessage,
            squares: amountSquares
        });

        // Gera o link
        const link = `/view-message?${params.toString()}`;

        // Redireciona para a página gerada
        navigate(link);
    };

    return (
        <div className='form-group'>
            <h4> Send a Message</h4>
            <label>Title:</label>
            <input
                type="text"
                value={textTitleMessage}
                onChange={(e) => setTextTitleMessage(e.target.value)}
            />

            <label>message:</label>
            <textarea
                type="area"
                value={textMessage}
                onChange={(e) => setTextMessage(e.target.value)}
            />

            <label>amount of squares:</label>
            <select
                value={amountSquares}
                onChange={(e) => SetAumontSquare(Number(e.target.value))}
            >
                <option value="8">8 items</option>
                <option value="16">16 items</option>
                <option value="20">20 items</option>
            </select>

            <button className='btn-primary' onClick={handleSendMessage}>
                Send message!
            </button>
        </div>
    );
}
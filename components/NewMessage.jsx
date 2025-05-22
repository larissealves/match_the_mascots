import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function NewMessage ({}) {
    const navigate = useNavigate();
    const [amountSquares, setAumontSquare] = useState(6);
    const [textTitleMessage, setTextTitleMessage] = useState("")
    const [textMessage, setTextMessage] = useState("")
    const [linkSendMessage, setLinkSendMessage] =  useState ("")
    const [errors, setErrors] = useState({});


    const handleSendMessage = () => {
        // Monta os dados
        const newErrors = {};
        setLinkSendMessage('');

        if (!textTitleMessage.trim()) {
            newErrors.title = 'Title is required';
        } else if (textTitleMessage.length > 150) {
            newErrors.title = 'Title must be 150 characters or less';
        }

        if (!textMessage.trim()) {
            newErrors.message = 'Message is required';
        } else if (textMessage.length > 500) {
            newErrors.message = 'Message must be 500 characters or less';
        }

        if (!amountSquares) {
            newErrors.squares = 'Please select the amount of squares';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});

        const params = {
            title: textTitleMessage,
            message: textMessage,
            squares: amountSquares
        };
        
        console.log(params.squares)
        const stringData = JSON.stringify(params);
        const encodedData = btoa(stringData);
        const link = `/view-message?data=${encodedData}`;

        console.log(link)
        setLinkSendMessage(link);
        window.open(link, '_blank');
       
    };

    return (
        <div className="form-group">
            <h4>Send a Message</h4>

            <label>Title:</label>
            <input
                type="text"
                value={textTitleMessage}
                maxLength={150}
                onChange={(e) => setTextTitleMessage(e.target.value)}
                placeholder="Enter a title"
            />
            {errors.title && <p className="error">{errors.title}</p>}

            <label>Message:</label>
            <textarea
                value={textMessage}
                maxLength={500}
                onChange={(e) => setTextMessage(e.target.value)}
                placeholder="Write your message"
            />
            {errors.message && <p className="error">{errors.message}</p>}

            <label>Amount of squares:</label>
            <select
                value={amountSquares}
                onChange={(e) => setAumontSquare(Number(e.target.value))}
            >
                <option value="6">6 items</option>
                <option value="12">12 items</option>
                <option value="18">18 items</option>
                <option value="24">24 items</option>
            </select>
            {errors.squares && <p className="error">{errors.squares}</p>}
             
            <button className="btn-primary" onClick={handleSendMessage}>
                    Send message!
            </button>

            
        </div>

        
    );
}
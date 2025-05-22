import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function ViewMessage() {
    const [searchParams] = useSearchParams();

    const title = searchParams.get('title');
    const message = searchParams.get('message');
    const squares = searchParams.get('squares');

    return (
        <div className="view-message">
            <h2>{title}</h2>
            <p>{message}</p>
            <p><strong>Squares:</strong> {squares}</p>
        </div>
    );
}

import React from 'react';
import './CardBadge.css';

function CardBadge({ text, style }) {
    return (
        <span style={style} className='badge'>
            {text}
        </span>
    )
}

export default CardBadge;
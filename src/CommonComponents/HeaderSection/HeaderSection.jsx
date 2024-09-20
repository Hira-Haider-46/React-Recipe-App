import React from 'react';
import './HeaderSection.css';

function HeaderSection({h1, p}) {
    return (
        <div className='header'>
            <h1>{h1}</h1>
            <p>{p}</p>
        </div>
    )
}

export default HeaderSection;
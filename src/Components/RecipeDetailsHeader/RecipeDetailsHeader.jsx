import React from 'react';
import Button from '../../CommonComponents/Button';
import './RecipeDetailsHeader.css';

function RecipeDetailsHeader({strMeal, strCategory, strArea, strYoutube}) {
    return (
        <div className='header-text'>
            <div className='text-area'>
                <h1>{strMeal}</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Praesent mattis nibh vestibulum euismod morbi ullamcorper rutrum. Orci cras in phasellus ultricies.</p>
                <span><strong>Category:</strong> {strCategory}</span>
                <span><strong>Area:</strong> {strArea}</span>
            </div>
            <a href={`${strYoutube}`} target='__blank'>
                <Button text='Watch video' />
            </a>
        </div>
    )
}

export default RecipeDetailsHeader;
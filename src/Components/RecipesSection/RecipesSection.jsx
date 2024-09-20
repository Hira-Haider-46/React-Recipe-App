import React from 'react';
import Button from '../../CommonComponents/Button';
import { Link } from 'react-router-dom';
import './RecipesSection.css';

function RecipesSection() {
    return (
        <div className='recipes-section'>
            <h1>Latest recipes</h1>
            <Link to='/recipes'>
                <Button text='View all recipes' />
            </Link>
        </div>
    )
}

export default RecipesSection;
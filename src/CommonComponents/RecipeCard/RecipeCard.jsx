import React from 'react';
import CardBadge from '../CardBadge';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

export default function RecipeCard({ strMeal, strCategory, strArea, strMealThumb }) { 
    return (
        <Link to={`/recipes/${strMeal}`}>
            <div className='recipe-card'>
                <div className='img-part'>
                    <img src={strMealThumb} alt={strMeal} />
                </div>
                <div className='text-part'>
                    <h2>{strMeal}</h2>
                    <div className='badge-container'>
                        <CardBadge
                            style={{
                                backgroundColor: '#feefc9',
                                color: '#d16400'
                            }}
                            text={strArea}
                        />
                        <CardBadge
                            style={{
                                backgroundColor: '#e8f5fa',
                                color: '#397a9e'
                            }}
                            text={strCategory}
                        />
                    </div>
                </div>
            </div>
        </Link>
    )
}
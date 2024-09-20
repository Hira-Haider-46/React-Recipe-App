import React from 'react';
import CardBadge from '../CardBadge';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

function RecipeCard() {
    return (
        <Link to=''>
            <div className='recipe-card'>
                <div className='img-part'>
                    <img src="https://cdn.prod.website-files.com/63a5a105581f4debc72a5ae5/63a855d1a56bae68cf7c1211_Air%20Fryer%20Steak%20Fries-p-500.webp" alt="food-img" />
                </div>
                <div className='text-part'>
                    <h2>Air fryer stake fries</h2>
                    <div className='badge-container'>
                        <CardBadge
                            style={{
                                backgroundColor: '#feefc9',
                                color: '#d16400'
                            }}
                            text='Japenese'
                        />
                        <CardBadge
                            style={{
                                backgroundColor: '#e8f5fa',
                                color: '#397a9e'
                            }}
                            text='SeaFood'
                        />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default RecipeCard;
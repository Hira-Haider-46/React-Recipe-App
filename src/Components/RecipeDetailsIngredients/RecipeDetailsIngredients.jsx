import React from 'react';
import './RecipeDetailsIngredients.css';

function RecipeDetailsIngredients({recipe}) {
    return (
        <div className='ingredients'>
            <h2>Ingredients</h2>
            <ul>
                {Array.from({ length: 20 }, (_, i) => i + 1).map(index => {
                    const ingredient = recipe[`strIngredient${index}`];
                    const measure = recipe[`strMeasure${index}`];
                    return ingredient ? (
                        <li key={index}>{measure} {ingredient}</li>
                    ) : null;
                })}
            </ul>
        </div>
    )
}

export default RecipeDetailsIngredients;
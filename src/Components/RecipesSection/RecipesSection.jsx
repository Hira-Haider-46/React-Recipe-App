import React, { useEffect } from 'react';
import { useRecipes } from '../../context/RecipeContext';
import RecipeCard from '../../CommonComponents/RecipeCard';
import { Link } from 'react-router-dom';
import Button from '../../CommonComponents/Button';
import AOS from 'aos';
import './RecipesSection.css';

function RecipesSection() {
    const { recipes, isLoading } = useRecipes();

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <div className='recipes-section'>
            <h1 data-aos="fade-down">Latest recipes</h1>

            <div className='recipes-container'>
                {isLoading ? (
                    <h2>Loading...</h2>
                ) : (
                    recipes.slice(0, 3).map((recipe) => (
                        <div key={recipe.id} data-aos="fade-up">
                            <RecipeCard
                                id={recipe.id}
                                strMeal={recipe.strMeal}
                                strCategory={recipe.strCategory}
                                strArea={recipe.strArea}
                                strMealThumb={recipe.strMealThumb}
                            />
                        </div>
                    ))
                )}
            </div>

            <Link to='/recipes' data-aos="fade-up">
                <Button text='View all recipes' />
            </Link>
        </div>
    );
}

export default RecipesSection;
import { useRecipes } from '../../context/RecipeContext';
import RecipeCard from '../../CommonComponents/RecipeCard';
import { Link } from 'react-router-dom';
import Button from '../../CommonComponents/Button';
import './RecipesSection.css';

function RecipesSection() {
    const { recipes, isLoading } = useRecipes();

    return (
        <div className='recipes-section'>
            <h1>Latest recipes</h1>

            <div className='recipes-container'>
                {isLoading ? (
                    <h2>Loading...</h2>
                ) : (
                    recipes.slice(0, 3).map((recipe) => (
                        <RecipeCard
                            key={recipe.id}
                            id={recipe.id}
                            strMeal={recipe.strMeal}
                            strCategory={recipe.strCategory}
                            strArea={recipe.strArea}
                            strMealThumb={recipe.strMealThumb}
                        />
                    ))
                )}
            </div>

            <Link to='/recipes'>
                <Button text='View all recipes' />
            </Link>
        </div>
    );
}

export default RecipesSection;
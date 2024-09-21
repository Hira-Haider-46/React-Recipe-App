import { useRecipes } from '../../context/RecipeContext';
import { useState } from 'react';
import RecipeCard from '../../CommonComponents/RecipeCard';
import { CiSearch } from "react-icons/ci";
import './Recipes.css';

export default function Recipes() {
  const { recipes, isLoading } = useRecipes();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRecipes = recipes.filter(recipe =>
    recipe.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='recipes'>
      <h1>All recipes</h1>
      <div className='search-wrapper'>
        <CiSearch className='search-icon' />
        <input
          type="text"
          placeholder='Search for a recipe'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className='recipes-container' style={filteredRecipes.length === 0 ? { display: 'block' } : null}>
        {isLoading ? <h2 className='no-recipe'>Loading...</h2> :
          <>
            {
              filteredRecipes.length > 0 ?
                (filteredRecipes.map(recipe => (
                  <RecipeCard
                    key={recipe.id}
                    id={recipe.id}
                    strMeal={recipe.strMeal}
                    strCategory={recipe.strCategory}
                    strArea={recipe.strArea}
                    strMealThumb={recipe.strMealThumb}
                  />
                )))
                : <h2 className='no-recipe'>No Recipes Found</h2>
            }
          </>
        }
      </div>
    </div>
  );
}
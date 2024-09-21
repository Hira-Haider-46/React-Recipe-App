import { useRecipes } from '../../context/RecipeContext';
import { useState, useEffect } from 'react';
import RecipeCard from '../../CommonComponents/RecipeCard';
import { CiSearch } from "react-icons/ci";
import AOS from 'aos';
import './Recipes.css';

export default function Recipes() {
  const { recipes, isLoading } = useRecipes();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRecipes = recipes.filter(recipe =>
    recipe.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className='recipes'>
      <h1 data-aos="fade-down">All recipes</h1>
      <div className='search-wrapper' data-aos="fade-right">
        <CiSearch className='search-icon' />
        <input
          type="text"
          placeholder='Search for a recipe'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className='recipes-container'>
        {isLoading ? (
          <h2 className='no-recipe' data-aos="fade-up">Loading...</h2>
        ) : (
          <>
            {
              filteredRecipes.length > 0 ? (
                filteredRecipes.map(recipe => (
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
              ) : (
                <h2 className='no-recipe' data-aos="fade-up">No Recipes Found</h2>
              )
            }
          </>
        )}
      </div>
    </div>
  );
}
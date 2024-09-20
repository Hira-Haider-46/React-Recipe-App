import React from 'react';
import RecipeCard from '../../CommonComponents/RecipeCard';
import Search from '../../Components/Search';
import './Recipes.css';

function Recipes() {
  return (
    <div className='recipes'>
      <h1>All recipes</h1>
      <Search />
      <div className='recipes-container'>
        <RecipeCard />
      </div>
    </div>
  )
}

export default Recipes;
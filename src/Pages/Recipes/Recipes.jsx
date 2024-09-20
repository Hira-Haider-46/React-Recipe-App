import React from 'react';
import RecipeCard from '../../CommonComponents/RecipeCard';
import { CiSearch } from "react-icons/ci";
import './Recipes.css';

export default function Recipes() {
  return (
    <div className='recipes'>
      <h1>All recipes</h1>
      <div className='search-wrapper'>
        <CiSearch className='search-icon' />
        <input type="text" placeholder='Search for a recipe' />
      </div>
      <div className='recipes-container'>
        <RecipeCard />
      </div>
    </div>
  )
}
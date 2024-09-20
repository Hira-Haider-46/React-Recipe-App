import RecipeDetailsIngredients from '../../Components/RecipeDetailsIngredients';
import RecipeDetailsHeader from '../../Components/RecipeDetailsHeader';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase';
import './RecipeDetails.css';

export default function RecipeDetails() {
  const { recipeName } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecipeByName = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'meals'));
        const recipeData = querySnapshot.docs
          .map(doc => doc.data())
          .find(recipe => recipe.strMeal === recipeName);
        setRecipe(recipeData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching recipe details: ', error);
      }
    };

    fetchRecipeByName();
  }, [recipeName]);

  return (
    <div className='recipe-details'>
      {isLoading ? <h2 className='no-recipe'>Loading...</h2> :
        <>
          <RecipeDetailsHeader
            strMeal={recipe.strMeal}
            strYoutube={recipe.strYoutube}
            strCategory={recipe.strCategory}
            strArea={recipe.strArea}
          />
          {/* <div className='img'>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          </div>
          <RecipeDetailsIngredients recipe={recipe}/>
          <div className='directions'>
            <h2>Directions</h2>
            <p>{recipe.strInstructions}</p>
          </div> */}
        </>
      }
    </div>
  );
}
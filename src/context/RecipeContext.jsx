import { createContext, useContext, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.js';

const RecipeContext = createContext();

export const useRecipes = () => useContext(RecipeContext);

export function RecipeProvider({ children }) {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'meals'));
                const recipesData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                setRecipes(recipesData);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <RecipeContext.Provider value={{ recipes, isLoading }}>
            {children}
        </RecipeContext.Provider>
    );
}
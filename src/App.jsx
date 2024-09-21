import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecipeProvider } from './context/RecipeContext';
import RecipeDetails from './Pages/RecipeDetails';
import Layout from './Components/Layout';
import NotFound from './Pages/NotFound';
import Contact from './Pages/Contact';
import Recipes from './Pages/Recipes';
import About from './Pages/About';
import Home from './Pages/Home';
import React from 'react';
import './App.css';

export default function App() {
  return (
    <RecipeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="recipes" element={<Recipes />} />
            <Route path="recipes/:recipeName" element={<RecipeDetails />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecipeProvider>
  )
}
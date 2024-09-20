import React from 'react';
import { CiSearch } from "react-icons/ci";
import FeaturedIn from '../../Components/FeaturedIn';
import AboutSection from '../../Components/AboutSection';
import RecipesSection from '../../Components/RecipesSection';
import './Home.css';

function Home() {
  return (
    <section className='home-container'>
      <h1 className='heading'>Lorem ipsum sit dolor sit amet consectetur</h1>
      <div className='search-wrapper'>
        <CiSearch className='search-icon' />
        <input type="text" placeholder='Search for a recipe' />
      </div>
      <RecipesSection />
      <AboutSection />
      <FeaturedIn />
    </section>
  )
}

export default Home;
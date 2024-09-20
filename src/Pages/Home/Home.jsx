import React from 'react';
import FeaturedIn from '../../CommonComponents/FeaturedIn';
import AboutSection from '../../CommonComponents/AboutSection';
import RecipesSection from '../../Components/RecipesSection';
import './Home.css';

function Home() {
  return (
    <section className='home-container'>
      <h1 className='heading'>Lorem ipsum sit dolor sit amet consectetur</h1>
      <RecipesSection />
      <AboutSection h1Text='Vegan foodie who loves to experiment with recipes' showBtn={true}/>
      <FeaturedIn />
    </section>
  )
}

export default Home;
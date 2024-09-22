import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FeaturedIn from '../../CommonComponents/FeaturedIn';
import AboutSection from '../../CommonComponents/AboutSection';
import RecipesSection from '../../Components/RecipesSection';
import './Home.css';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false });
  }, []);

  return (
    <section className='home-container'>
      <h1 className='heading' data-aos="fade-down">
        A blog template made for food influencers
      </h1>
      <div data-aos="fade-up">
        <RecipesSection />
      </div>
      <div data-aos="fade-up">
        <AboutSection h1Text='Vegan foodie who loves to experiment with recipes' showBtn={true} />
      </div>
      <div data-aos="fade-up">
        <FeaturedIn />
      </div>
    </section>
  );
}

export default Home;
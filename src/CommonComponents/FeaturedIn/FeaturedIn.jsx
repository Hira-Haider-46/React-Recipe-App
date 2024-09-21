import React, { useEffect } from 'react';
import AOS from 'aos';
import './FeaturedIn.css';

function FeaturedIn() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className='featured-in' data-aos="fade-up">
      <h2 data-aos="fade-down">Featured in</h2>
      <div className='brand-logos' data-aos="fade-up">
        <img src='https://cdn.prod.website-files.com/63a595b668385c4de9a03b27/63a5ab3d6c31f2232723657f_Logo%20NYT.svg' alt='brand-logo' />
        <img src='https://cdn.prod.website-files.com/63a595b668385c4de9a03b27/63a5ab3d85e33d3b02335fd6_Logo%20VegNews.svg' alt='brand-logo' />
        <img src='https://cdn.prod.website-files.com/63a595b668385c4de9a03b27/63a5ab3d78e8ccee25d37667_Logo%20Buzzfeed.svg' alt='brand-logo' />
        <img src='https://cdn.prod.website-files.com/63a595b668385c4de9a03b27/63a5ab3dc97e6a6494313230_Logo%20Huffpost.svg' alt='brand-logo' />
        <img src='https://cdn.prod.website-files.com/63a595b668385c4de9a03b27/63a595b668385c4de9a03b27/63a5ab3d65217b43af1f7781_Logo%20Forks%20Over%20Knives.svg' alt='brand-logo' />
      </div>
    </div>
  );
}

export default FeaturedIn;
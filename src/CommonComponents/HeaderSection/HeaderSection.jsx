import React, { useEffect } from 'react';
import AOS from 'aos';
import './HeaderSection.css';

function HeaderSection({ h1, p }) {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false });
  }, []);

  return (
    <div className='header' data-aos="fade-down">
      <h1 data-aos="fade-up">{h1}</h1>
      <p data-aos="fade-up">{p}</p>
    </div>
  );
}

export default HeaderSection;
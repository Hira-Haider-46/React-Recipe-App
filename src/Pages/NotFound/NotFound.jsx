import React, { useEffect } from 'react';
import Button from '../../CommonComponents/Button';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import './NotFound.css';

function NotFound() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className='not-found' data-aos="fade-up">
      <h1 data-aos="fade-down">Oh no!</h1>
      <p data-aos="fade-up">The page you are looking for doesn't exist or has been moved.</p>
      <Link to='/' data-aos="fade-up">
        <Button text='Return home' />
      </Link>
    </div>
  );
}

export default NotFound;
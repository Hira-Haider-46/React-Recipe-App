import React from 'react';
import { CiSearch } from "react-icons/ci";
import './Home.css';

function Home() {
  return (
    <div className='home-container'>
      <h1>Lorem ipsum sit dolor sit amet consectetur</h1>
      <div className='search-wrapper'>
        <CiSearch className='search-icon' />
        <input type="text" placeholder='Search for a recipe' />
      </div>
    </div>
  )
}

export default Home;
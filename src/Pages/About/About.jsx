import React from 'react';
import HeaderSection from '../../CommonComponents/HeaderSection';
import FeaturedIn from '../../CommonComponents/FeaturedIn';
import invertedCommas from '../../assets/images/inverted-commas.svg';
import AboutSection from '../../CommonComponents/AboutSection';
import './About.css';

function About() {
  return (
    <div className='about'>
      <HeaderSection h1='About me' p='Lorem ipsum dolor sit amet consectetur. Praesent mattis nibh vestibulum euismod morbi ullamcorper rutrum. Orci cras in phasellus ultricies.' />
      <AboutSection h1Text='Hey, my name is Rebecca!' showBtn={false}/>
      <FeaturedIn />
      <div className='text'>
        <img src={invertedCommas} alt="commas" />
        <h1>Lorem ipsum dolor sit amet consectetur. Amet molestie est in nisl nullam ac sed ipsum viverra. Elementum nisi facilisi cursus habitasse.</h1>
      </div>
    </div>
  )
}

export default About;
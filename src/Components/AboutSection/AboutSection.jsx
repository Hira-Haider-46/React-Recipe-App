import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../CommonComponents/Button';
import './AboutSection.css';

function AboutSection() {
    return (
        <div className='about-section'>
            <div className='text-portion'>
                <h1 className='about-heading'>Vegan foodie who loves to experiment with recipes</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Mauris at in luctus faucibus at fermentum velit duis amet. Dolor vitae porta ac eget consequat a nulla bibendum.</p>
                <p>Velit placerat urna adipiscing sociis a. Urna lacus commodo adipiscing est magna mi nullam sit. Tellus sagittis urna et mauris amet odio at non.</p>
                <Link to="/about">
                    <Button text="About me" />
                </Link>
            </div>
            <div className='img-portion'>
                <img src='https://cdn.prod.website-files.com/63a595b668385c4de9a03b27/63a5ab3d65217b24f01f7782_About%20Photo.jpg' alt='person-img' />
            </div>
        </div>
    )
}

export default AboutSection;
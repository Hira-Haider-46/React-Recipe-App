import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import AOS from 'aos';
import './AboutSection.css';

function AboutSection({ h1Text, showBtn }) {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <div className='about-section'>
            <div className='text-portion' data-aos="fade-right">
                <h1 className='about-heading' data-aos="fade-down">{h1Text}</h1>
                <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur. Mauris at in luctus faucibus at fermentum velit duis amet. Dolor vitae porta ac eget consequat a nulla bibendum.</p>
                <p data-aos="fade-up">Velit placerat urna adipiscing sociis a. Urna lacus commodo adipiscing est magna mi nullam sit. Tellus sagittis urna et mauris amet odio at non.</p>
                {showBtn &&
                <Link to="/about" data-aos="fade-up">
                    <Button text="About me" />
                </Link>}
            </div>
            <div className='img-portion' data-aos="fade-left">
                <img src='https://cdn.prod.website-files.com/63a595b668385c4de9a03b27/63a5ab3d65217b24f01f7782_About%20Photo.jpg' alt='person-img' />
            </div>
        </div>
    );
}

export default AboutSection;
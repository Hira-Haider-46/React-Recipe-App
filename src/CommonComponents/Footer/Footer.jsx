import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import './Footer.css';

function Footer() {
    return (
        <footer>
            <section className='email-section'>
                <h1>Get recipes straight to your inbox!</h1>
                <div>
                    <input type="text" placeholder='Email address' />
                    <Button text='Subscribe' />
                </div>
            </section>
            <section className='socials-section'>
                <h2><Link to="/">Recipe App</Link></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorem sequi ex voluptatibus ab adipisci officiis, a perferendis aut consectetur quo soluta libero expedita maiores. Ab voluptatem alias obcaecati dolore!</p>
                <div className='social-icons'>
                    <FaInstagram />
                    <FaYoutube />
                    <FaFacebookF />
                    <FaTwitter />
                </div>
            </section>
            <section className='footer-section'>
                <p>© Recipe App 2024. All Rights Reserved.</p>
            </section>
        </footer>
    )
}

export default Footer;
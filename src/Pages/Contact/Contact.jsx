import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import HeaderSection from '../../CommonComponents/HeaderSection';
import './Contact.css'

function Contact() {
    return (
        <>
            <HeaderSection h1='Contact Us' p='Lorem ipsum dolor sit amet consectetur. Praesent mattis nibh vestibulum euismod morbi ullamcorper rutrum. Orci cras in phasellus ultricies.'/>
            <div className='social-icons icons'>
                <FaInstagram />
                <FaYoutube />
                <FaFacebookF />
                <FaTwitter />
            </div>
        </>
    )
}

export default Contact;
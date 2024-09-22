import React, { useEffect } from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import HeaderSection from '../../CommonComponents/HeaderSection';
import AOS from 'aos';
import './Contact.css';

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <>
      <HeaderSection 
        h1='Contact Us' 
        p='Lorem ipsum dolor sit amet consectetur. Praesent mattis nibh vestibulum euismod morbi ullamcorper rutrum. Orci cras in phasellus ultricies.' 
        data-aos="fade-down"
      />
      <div className='social-icons icons' data-aos="fade-up">
        <FaInstagram />
        <FaYoutube />
        <FaFacebookF />
        <FaTwitter />
      </div>
    </>
  );
}

export default Contact;
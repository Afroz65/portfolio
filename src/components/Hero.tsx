import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

const Hero: React.FC = () => {
  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    } else {
      console.warn('About section not found');
    }
  };

  return (
    <motion.section 
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p 
              className="hero-greeting"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              className="hero-name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {personalInfo.name}
            </motion.h1>
            
            <motion.h2 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {personalInfo.title}
            </motion.h2>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Passionate about crafting innovative digital experiences through clean, efficient code. 
              I thrive on building scalable solutions that make a real impact, while constantly 
              learning and pushing the boundaries of what's possible in web development.
            </motion.p>
            
            <motion.div 
              className="hero-contact"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <div className="contact-item">
                <MapPin size={16} />
                <span>{personalInfo.location}</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
              <div className="contact-item">
                <Linkedin size={16} />
                <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
              <div className="contact-item">
                <Github size={16} />
                <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
              
              <div className="hero-buttons">
                <a href="#contact" className="btn">Get In Touch</a>
                <a 
                  href="/Resume-Jawed Afroz.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary"
                >
                  <Download size={16} />
                  Resume
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="image-container">
              <img 
                src="/profile-pic.jpg" 
                alt={`${personalInfo.name} - Professional Photo`}
                className="profile-image"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        onClick={handleScrollToAbout}
      >
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;

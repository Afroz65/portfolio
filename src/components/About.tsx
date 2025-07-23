import React from 'react';
import { motion } from 'framer-motion';
import { professionalSummary } from '../data/portfolioData';
import './Section.css';

const About: React.FC = () => {
  return (
    <motion.section 
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.p 
          className="summary-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {professionalSummary}
        </motion.p>
      </div>
    </motion.section>
  );
};

export default About;

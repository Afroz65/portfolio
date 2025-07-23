import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star } from 'lucide-react';
import { achievements } from '../data/portfolioData';
import './Section.css';
import './Achievements.css';

const Achievements: React.FC = () => {
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
          Achievements
        </motion.h2>
        
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="achievement-card"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.2) }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="achievement-header">
                <div className="achievement-icon">
                  {index === 0 ? <Trophy size={24} /> : <Star size={24} />}
                </div>
                
                <div className="achievement-title-container">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-timeline">{achievement.date}</p>
                </div>
              </div>
              
              <div className="achievement-content">
                <p className="achievement-description">{achievement.description}</p>
              </div>
              
              <div className="achievement-decoration"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Achievements;

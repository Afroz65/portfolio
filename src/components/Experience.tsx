import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experience } from '../data/portfolioData';
import './Section.css';
import './Experience.css';

const Experience: React.FC = () => {
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
          Professional Experience
        </motion.h2>
        
        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.2) }}
              viewport={{ once: true }}
            >
              <div className="experience-icon">
                <Briefcase size={24} />
              </div>
              
              <div className="experience-content">
                <motion.div 
                  className="experience-header"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.2) }}
                  viewport={{ once: true }}
                >
                  <h3 className="experience-title">{exp.title}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                  
                  <div className="experience-meta">
                    <div className="meta-item">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="meta-item">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.ul 
                  className="experience-achievements"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.2) }}
                  viewport={{ once: true }}
                >
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <motion.li
                      key={achievementIndex}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.6 + (index * 0.2) + (achievementIndex * 0.1) 
                      }}
                      viewport={{ once: true }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;

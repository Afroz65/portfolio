import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { education, certifications } from '../data/portfolioData';
import './Section.css';
import './Education.css';

const Education: React.FC = () => {
  return (
    <motion.section 
      className="section education-section"
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
          Education & Certifications
        </motion.h2>
        
        <div className="education-grid">
          {/* Education */}
          <motion.div
            className="education-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="category-header">
              <GraduationCap size={28} />
              <h3>Education</h3>
            </div>
            
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="education-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="education-degree">{edu.degree}</h4>
                <p className="education-institution">{edu.institution}</p>
                <div className="education-meta">
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{edu.duration}</span>
                  </div>
                  {edu.grade && (
                    <div className="meta-item grade">
                      <span>{edu.grade}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Certifications */}
          <motion.div
            className="education-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="category-header">
              <Award size={28} />
              <h3>Certifications</h3>
            </div>
            
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="education-item"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="education-degree">{cert.title}</h4>
                <p className="education-institution">{cert.organization}</p>
                <div className="education-meta">
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{cert.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;

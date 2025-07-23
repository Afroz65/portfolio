import React from 'react';
import { motion } from 'framer-motion';
import { Code, Wrench, Database, Cog, Users } from 'lucide-react';
import { skills } from '../data/portfolioData';
import './Section.css';
import './Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} />,
      skills: skills.programmingLanguages,
      color: '#3b82f6'
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Wrench size={24} />,
      skills: skills.frameworks,
      color: '#10b981'
    },
    {
      title: 'Tools & Platforms',
      icon: <Cog size={24} />,
      skills: skills.tools,
      color: '#f59e0b'
    },
    {
      title: 'Databases',
      icon: <Database size={24} />,
      skills: skills.databases,
      color: '#ef4444'
    },
    {
      title: 'Practices & Methodologies',
      icon: <Cog size={24} />,
      skills: skills.practices,
      color: '#8b5cf6'
    },
    {
      title: 'Soft Skills',
      icon: <Users size={24} />,
      skills: skills.softSkills,
      color: '#06b6d4'
    }
  ];

  return (
    <motion.section 
      className="section skills-section"
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
          Technical Skills
        </motion.h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="skill-header" style={{ color: category.color }}>
                {category.icon}
                <h3>{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.05 * skillIndex }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    style={{ borderColor: category.color }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;

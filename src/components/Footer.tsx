import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="footer-content">
          <motion.p 
            className="footer-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Made with <Heart size={16} className="heart-icon" /> and <Code size={16} className="code-icon" /> by Jawed Afroz
          </motion.p>
          <motion.p 
            className="footer-year"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            © {currentYear} All rights reserved
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

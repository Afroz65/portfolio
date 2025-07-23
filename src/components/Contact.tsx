import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Section.css';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: '#ef4444'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: '#10b981'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: personalInfo.location,
      href: `https://maps.google.com?q=${encodeURIComponent(personalInfo.location)}`,
      color: '#3b82f6'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: `https://${personalInfo.linkedin}`,
      color: '#0077b5'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'View my code',
      href: `https://${personalInfo.github}`,
      color: '#333'
    }
  ];

  return (
    <motion.section 
      id="contact"
      className="section contact-section"
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
          Get In Touch
        </motion.h2>
        
        <motion.p 
          className="contact-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          I'm always open to discussing new opportunities, interesting projects, 
          or just having a conversation about technology. Feel free to reach out!
        </motion.p>
        
        <div className="contact-content">
          {/* Contact Methods */}
          <motion.div 
            className="contact-methods"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="contact-methods-title">Let's Connect</h3>
            
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.label === 'Location' ? '_blank' : undefined}
                rel={method.label === 'Location' ? 'noopener noreferrer' : undefined}
                className="contact-method"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="contact-icon" style={{ color: method.color }}>
                  {method.icon}
                </div>
                <div className="contact-details">
                  <span className="contact-label">{method.label}</span>
                  <span className="contact-value">{method.value}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="contact-form-title">Send a Message</h3>
            
            {isSubmitted ? (
              <motion.div 
                className="success-message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle size={48} />
                <h4>Message Sent!</h4>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="submit-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

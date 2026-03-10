'use client';

import { useState } from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import styles from './page.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in all required fields.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    
    if (!validateForm()) return;

    setStatus('submitting');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage("Oops! Something went wrong. Please try again later.");
    }
  };

  return (
    <div className={styles.contactPage}>
      {/* Header Section */}
      <header className={styles.contactHeader}>
        <div className="container">
          <div className={`animate-fade-in ${styles.headerContent}`}>
            <h1 className={styles.pageTitle}>Get In Touch</h1>
            <p className={styles.pageSubtitle}>Have a question, catering request, or just want to say hi?</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container">
        <div className={styles.contactGrid}>
          
          {/* Contact Information */}
          <ScrollReveal>
            <section className={styles.infoSection}>
              <h2 className={styles.sectionTitle}>Contact Information</h2>
              
              <div className={styles.infoBlocks}>
                <div className={styles.infoBlock}>
                  <span className={styles.icon}>📞</span>
                  <div>
                    <h3 className={styles.infoTitle}>Phone</h3>
                    <p>(555) 123-4567</p>
                  </div>
                </div>
                
                <div className={styles.infoBlock}>
                  <span className={styles.icon}>📧</span>
                  <div>
                    <h3 className={styles.infoTitle}>Email</h3>
                    <p>info@caribbeanbites.com</p>
                  </div>
                </div>
                
                <div className={styles.infoBlock}>
                  <span className={styles.icon}>📲</span>
                  <div>
                    <h3 className={styles.infoTitle}>Social Media</h3>
                    <div className={styles.socialLinks}>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={200}>
            <section className={styles.formSection}>
              <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Send us a message</h2>
                
                {status === 'success' ? (
                  <div className={styles.successMessage}>
                    <div className={styles.successIcon}>✓</div>
                    <h3>Message Sent!</h3>
                    <p>Thanks for reaching out. We'll get back to you as soon as possible!</p>
                    <button className="btn btn-primary" onClick={() => setStatus('idle')} style={{ marginTop: '1rem' }}>
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.contactForm}>
                    {errorMessage && (
                      <div className={styles.errorMessage}>{errorMessage}</div>
                    )}
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.label}>Name <span className={styles.required}>*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input}
                        required
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.label}>Email <span className={styles.required}>*</span></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.input}
                        required
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="phone" className={styles.label}>Phone Number (Optional)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={styles.input}
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="message" className={styles.label}>Message <span className={styles.required}>*</span></label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={styles.textarea}
                        rows="5"
                        required
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className={`btn btn-primary ${styles.submitButton}`}
                      disabled={status === 'submitting'}
                    >
                      {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                    
                    <p className={styles.spamNote}>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                  </form>
                )}
              </div>
            </section>
          </ScrollReveal>

        </div>
      </div>
    </div>
  );
}

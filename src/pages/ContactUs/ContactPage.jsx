import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [feedbackType, setFeedbackType] = useState('brand');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const feedbackOptions = [
    { id: 'brand', label: 'Brand' },
    { id: 'order', label: 'Order' },
    { id: 'takeaway', label: 'Takeaway' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - replace with your actual API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Thank you for your feedback! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const getPlaceholder = () => {
    switch (feedbackType) {
      case 'order':
        return 'Please include your order number and describe your experience...';
      case 'takeaway':
        return 'Tell us about your takeaway experience...';
      default:
        return 'Share your thoughts about our brand...';
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Left Column - Contact Info */}
        <div className="contact-left">
          <div className="contact-info">
            <h1 className="contact-title">GET IN TOUCH!</h1>

            {/* Address */}
            <div className="info-section">
              <div className="info-header">
                <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <h3>Address</h3>
              </div>
              <p className="info-text">
                Mall of Africa,<br />
                Lone Creek Crescent, Waterfall City,<br />
                Midrand, 1685
              </p>
            </div>

            {/* General Enquiries */}
            <div className="info-section">
              <div className="info-header">
                <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <h3>General or Business Enquiries</h3>
              </div>
              <div className="info-content">
                <a href="tel:+27116551300" className="phone-link">+27 (0) 11 655 1300</a>
                <div className="hours">
                  <svg className="hours-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>Operating hours: 07:00 – 16:00 (Mon – Fri)</span>
                </div>
              </div>
            </div>

            {/* Customer Care */}
            <div className="info-section">
              <div className="info-header">
                <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <h3>Customer Care</h3>
              </div>
              <div className="info-content">
                <a href="tel:+27614236541" className="phone-link">+27 (0) 61 423 6541</a>
                <div className="hours">
                  <svg className="hours-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>Operating hours: 08:00 – 19:00 (Mon – Fri)</span>
                </div>
              </div>
            </div>

            {/* Franchise Opportunities */}
            <div className="info-section">
              <div className="info-header">
                <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <h3>Franchise Opportunities</h3>
              </div>
              <div className="info-content">
                <a 
                  href="https://njabulophiri.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="website-link"
                >
                  Visit thedonrestaurant.com <span>↗</span>
                </a>
                <div className="franchise-contacts">
                  <div className="franchise-contact">
                    <svg className="user-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    <span>Gauteng – <strong>Njabulo Phiri</strong></span>
                  </div>
                  <div className="franchise-contact">
                    <svg className="user-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    <span>Nationwide – <strong>David Blake</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="map-container">
             <div className="map-wrapper">
              <iframe
                title="Mall of Africa Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=28.1055%2C-25.9675%2C28.1155%2C-25.9575&layer=mapnik&marker=-25.9625%2C28.1105"
                className="map-iframe"
                loading="lazy"
              />
              {/* Food Pin Overlay */}
              <div className="food-pin">
                <svg viewBox="0 0 24 24" fill="currentColor" className="food-pin-icon">
                  <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
                </svg>
              </div>
            </div>
            <p className="map-address">
              📍 Mall of Africa, Lone Creek Crescent, Midrand
            </p>
          </div>
        </div>

        {/* Right Column - Feedback Form */}
        <div className="contact-right">
          <div className="feedback-form-container">
            <h2 className="form-title">Send Us Feedback</h2>
            <p className="form-subtitle">We'd love to hear from you</p>
            <p className="feedback-type-label">Feedback type:</p>

            {/* Feedback Type Selection */}
            <div className="feedback-types">
              {feedbackOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={`feedback-type-btn ${feedbackType === option.id ? 'active' : ''}`}
                  onClick={() => setFeedbackType(option.id)}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="feedback-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name *"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email address *"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone number (optional)"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={getPlaceholder()}
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Feedback'}
              </button>

              <p className="privacy-text">
                By submitting, you agree to our <a href="/privacy">Privacy Policy</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

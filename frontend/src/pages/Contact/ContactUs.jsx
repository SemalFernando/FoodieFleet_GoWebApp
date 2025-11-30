import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaFacebook, 
  FaTwitter, 
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa';
import './ContactUs.css';

function ContactUs() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`contact-page ${fadeIn ? 'fade-in-active' : ''}`}>
      <Header />
      <main className="contact-container">
        {/* Hero Section */}
        <section className="contact-hero fade-in-section" style={{ animationDelay: '0.2s' }}>
          <div className="hero-content">
            <h1 className="fade-in-element" style={{ animationDelay: '0.4s' }}>Get In Touch</h1>
            <p className="hero-subtitle fade-in-element" style={{ animationDelay: '0.6s' }}>
              We'd love to hear from you about your smart cart experience
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="contact-content fade-in-section" style={{ animationDelay: '0.8s' }}>
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form fade-in-element" style={{ animationDelay: '1s' }}>
              <h2>Send Us a Message</h2>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info fade-in-element" style={{ animationDelay: '1.2s' }}>
              <h2>Contact Information</h2>
              <div className="info-card">
                <FaPhone className="info-icon" />
                <div>
                  <h3>Phone</h3>
                  <p>+94 77 097 1527</p>
                </div>
              </div>
              <div className="info-card">
                <FaEnvelope className="info-icon" />
                <div>
                  <h3>Email</h3>
                  <p>support@tursacart.com</p>
                </div>
              </div>
              <div className="info-card">
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <h3>Address</h3>
                  <p>123 Tech Park Drive, Silicon Valley, CA 94025</p>
                </div>
              </div>
              <div className="info-card">
                <FaClock className="info-icon" />
                <div>
                  <h3>Hours</h3>
                  <p>Monday - Friday: 9am - 6pm</p>
                  <p>Saturday: 10am - 4pm</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section fade-in-section" style={{ animationDelay: '1.4s' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.465434032089!2d-121.92965668469418!3d37.33484797984245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcb43b8c98251%3A0x8a3f8a6e0f9eac8e!2sSilicon%20Valley!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="Our Location"
          ></iframe>
        </section>
      </main>

      {/* Footer */}
      <footer className="main-footer fade-in-section" style={{ animationDelay: '1.6s' }}>
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>TURSACart</h3>
              <p>Revolutionizing your shopping experience with smart cart technology.</p>
              <div className="social-links">
                <a href="https://www.facebook.com/tursacart" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://www.twitter.com/tursacart" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://www.instagram.com/tursacart" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://www.linkedin.com/company/tursacart" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              </div>
            </div>
            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/how-it-works">How It Works</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Support</h3>
              <ul>
                <li><a href="/faq">FAQs</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/shipping">Shipping Policy</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Newsletter</h3>
              <p>Subscribe to get updates on new features and offers.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Your Email" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} TURSACart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ContactUs;
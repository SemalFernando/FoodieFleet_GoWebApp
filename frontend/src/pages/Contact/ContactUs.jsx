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
  FaLinkedin,
  FaUtensils,
  FaShippingFast,
  FaHeadset
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
              We're here to serve you better! Questions about our menu or delivery?
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="contact-content fade-in-section" style={{ animationDelay: '0.8s' }}>
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form fade-in-element" style={{ animationDelay: '1s' }}>
              <h2>Send Us a Message</h2>
              <p className="form-subtitle">Have a question about our menu, delivery, or special dietary requirements? We'd love to hear from you!</p>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Order Number (if applicable)" />
                </div>
                <div className="form-group">
                  <select>
                    <option value="">Select Inquiry Type</option>
                    <option value="menu">Menu Questions</option>
                    <option value="delivery">Delivery Issues</option>
                    <option value="allergy">Dietary Requirements</option>
                    <option value="catering">Catering Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="Tell us about your food experience..." rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info fade-in-element" style={{ animationDelay: '1.2s' }}>
              <h2>We're Here to Help</h2>
              <div className="info-card">
                <FaHeadset className="info-icon" />
                <div>
                  <h3>Customer Support</h3>
                  <p>+1 (555) 123-FOOD</p>
                  <p>Available 24/7 for urgent delivery issues</p>
                </div>
              </div>
              <div className="info-card">
                <FaEnvelope className="info-icon" />
                <div>
                  <h3>Email</h3>
                  <p>hello@foodiefleet.com</p>
                  <p>support@foodiefleet.com</p>
                </div>
              </div>
              <div className="info-card">
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <h3>Our Kitchen</h3>
                  <p>123 Fresh Food Avenue</p>
                  <p>Culinary District, CA 90210</p>
                </div>
              </div>
              <div className="info-card">
                <FaClock className="info-icon" />
                <div>
                  <h3>Delivery Hours</h3>
                  <p>Monday - Sunday: 10am - 11pm</p>
                  <p>Holiday hours may vary</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="quick-stats">
                <div className="stat">
                  <FaUtensils className="stat-icon" />
                  <span>50+ Chef Recipes</span>
                </div>
                <div className="stat">
                  <FaShippingFast className="stat-icon" />
                  <span>30-min Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section fade-in-section" style={{ animationDelay: '1.4s' }}>
          <div className="map-container">
            <h2>Find Our Kitchen</h2>
            <p>Visit our state-of-the-art kitchen where the magic happens!</p>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.465434032089!2d-121.92965668469418!3d37.33484797984245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcb43b8c98251%3A0x8a3f8a6e0f9eac8e!2sSilicon%20Valley!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0, borderRadius: '15px' }} 
              allowFullScreen="" 
              loading="lazy"
              title="FoodieFleet Kitchen Location"
            ></iframe>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section fade-in-section" style={{ animationDelay: '1.6s' }}>
          <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>What are your delivery areas?</h3>
                <p>We currently deliver within a 10-mile radius of our kitchen. Enter your address during checkout to check availability.</p>
              </div>
              <div className="faq-item">
                <h3>Do you accommodate dietary restrictions?</h3>
                <p>Absolutely! We offer vegetarian, vegan, gluten-free, and dairy-free options. Just let us know in the order notes.</p>
              </div>
              <div className="faq-item">
                <h3>How long does delivery take?</h3>
                <p>Most deliveries arrive within 30-45 minutes. We guarantee hot, fresh food every time.</p>
              </div>
              <div className="faq-item">
                <h3>Can I modify my order after placing it?</h3>
                <p>Changes can be made within 5 minutes of placing your order by calling our support line.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="main-footer fade-in-section" style={{ animationDelay: '1.8s' }}>
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>FoodieFleet</h3>
              <p>Delivering restaurant-quality meals straight to your door. Fresh ingredients, expert chefs, and fast delivery.</p>
              <div className="social-links">
                <a href="https://www.facebook.com/foodiefleet" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://www.twitter.com/foodiefleet" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://www.instagram.com/foodiefleet" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://www.linkedin.com/company/foodiefleet" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              </div>
            </div>
            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/menu">Our Menu</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Support</h3>
              <ul>
                <li><a href="/faq">FAQs</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/delivery">Delivery Areas</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Newsletter</h3>
              <p>Subscribe to get updates on new menu items and special offers.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Your Email" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} FoodieFleet. All rights reserved. | Made with ❤️ and 🍕</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ContactUs;
import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaUtensils, FaHeart, FaAward } from 'react-icons/fa';
import Header from '../../components/Header/Header';
import './About.css';

function About() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`about-page ${fadeIn ? 'fade-in-active' : ''}`}>
      <Header />
      <main className="about-container">
        {/* Hero Section */}
        <section className="about-hero fade-in-section" style={{ animationDelay: '0.2s' }}>
          <div className="hero-content">
            <h1 className="fade-in-element" style={{ animationDelay: '0.4s' }}>Our Food Journey</h1>
            <p className="hero-subtitle fade-in-element" style={{ animationDelay: '0.6s' }}>
              Serving happiness on every plate since 2015
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section fade-in-section" style={{ animationDelay: '0.8s' }}>
          <div className="mission-content">
            <div className="mission-text">
              <h2 className="fade-in-element" style={{ animationDelay: '1s' }}>Our Passion for Food</h2>
              <p className="fade-in-element" style={{ animationDelay: '1.1s' }}>
                At FoodieFleet, we believe that great food brings people together. 
                Our journey started with a simple mission: to deliver restaurant-quality 
                meals right to your doorstep, made with love and the freshest ingredients.
              </p>
              <p className="mission-extra fade-in-element" style={{ animationDelay: '1.2s' }}>
                Every dish we create tells a story of culinary excellence, from our 
                master chefs' secret recipes to our commitment to sustainable sourcing 
                and local partnerships with farmers and producers.
              </p>
              
              <div className="stats-grid fade-in-element" style={{ animationDelay: '1.3s' }}>
                <div className="stat-item">
                  <FaUtensils className="stat-icon" />
                  <div className="stat-number">50K+</div>
                  <div className="stat-label">Meals Served</div>
                </div>
                <div className="stat-item">
                  <FaHeart className="stat-icon" />
                  <div className="stat-number">15K+</div>
                  <div className="stat-label">Happy Customers</div>
                </div>
                <div className="stat-item">
                  <FaAward className="stat-icon" />
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Awards Won</div>
                </div>
              </div>
            </div>
            <div className="mission-image fade-in-element" style={{ animationDelay: '1.4s' }}></div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section fade-in-section" style={{ animationDelay: '1.6s' }}>
          <div className="values-container">
            <h2 className="fade-in-element" style={{ animationDelay: '1.8s' }}>Our Core Values</h2>
            <div className="values-grid">
              <div className="value-card fade-in-element" style={{ animationDelay: '2s' }}>
                <div className="value-icon">🌱</div>
                <h3>Fresh Ingredients</h3>
                <p>We source locally and ensure every ingredient meets our high standards for freshness and quality.</p>
              </div>
              <div className="value-card fade-in-element" style={{ animationDelay: '2.1s' }}>
                <div className="value-icon">👨‍🍳</div>
                <h3>Expert Chefs</h3>
                <p>Our culinary team brings years of experience and passion to every dish they create.</p>
              </div>
              <div className="value-card fade-in-element" style={{ animationDelay: '2.2s' }}>
                <div className="value-icon">🚚</div>
                <h3>Fast Delivery</h3>
                <p>Hot, fresh meals delivered to your door in 30 minutes or less, guaranteed.</p>
              </div>
              <div className="value-card fade-in-element" style={{ animationDelay: '2.3s' }}>
                <div className="value-icon">💚</div>
                <h3>Sustainable</h3>
                <p>We're committed to eco-friendly packaging and reducing our environmental footprint.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section fade-in-section" style={{ animationDelay: '2.4s' }}>
          <div className="team-container">
            <h2 className="fade-in-element" style={{ animationDelay: '2.6s' }}>Meet Our Culinary Team</h2>
            <p className="team-intro fade-in-element" style={{ animationDelay: '2.7s' }}>
              The passionate chefs and food experts behind every delicious meal
            </p>
            <div className="team-grid">
              {/* Team Member 1 */}
              <div className="team-card fade-in-element" style={{ animationDelay: '2.8s' }}>
                <div
                  className="member-photo"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')" }}
                ></div>
                <h3>Marco Rossi</h3>
                <p className="member-role">Executive Chef</p>
                <p className="member-bio">15 years of culinary experience with expertise in Italian cuisine</p>
                <div className="social-links">
                  <button className="social-btn">
                    <FaLinkedin className="social-icon" />
                  </button>
                  <button className="social-btn">
                    <FaGithub className="social-icon" />
                  </button>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="team-card fade-in-element" style={{ animationDelay: '2.9s' }}>
                <div
                  className="member-photo"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')" }}
                ></div>
                <h3>Sarah Chen</h3>
                <p className="member-role">Pastry Chef</p>
                <p className="member-bio">Award-winning pastry artist specializing in French desserts</p>
                <div className="social-links">
                  <button className="social-btn">
                    <FaLinkedin className="social-icon" />
                  </button>
                  <button className="social-btn">
                    <FaGithub className="social-icon" />
                  </button>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="team-card fade-in-element" style={{ animationDelay: '3s' }}>
                <div
                  className="member-photo"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')" }}
                ></div>
                <h3>James Wilson</h3>
                <p className="member-role">Head of Operations</p>
                <p className="member-bio">Ensuring every meal meets our quality standards and delivery promises</p>
                <div className="social-links">
                  <button className="social-btn">
                    <FaLinkedin className="social-icon" />
                  </button>
                  <button className="social-btn">
                    <FaGithub className="social-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Header from '../components/Header/Header';
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
            <h1 className="fade-in-element" style={{ animationDelay: '0.4s' }}>Our Story</h1>
            <p className="hero-subtitle fade-in-element" style={{ animationDelay: '0.6s' }}>
              Redefining shopping experiences for our Customers
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section fade-in-section" style={{ animationDelay: '0.8s' }}>
          <div className="mission-content">
            <div className="mission-text">
              <h2 className="fade-in-element" style={{ animationDelay: '1s' }}>Our Mission</h2>
              <p className="fade-in-element" style={{ animationDelay: '1.1s' }}>
                At TURSACart, we're committed to transforming the way you shop by 
                providing seamless, intuitive, and personalized shopping experiences 
                that help you save both time and money.
              </p>
              <p className="mission-extra fade-in-element" style={{ animationDelay: '1.2s' }}>
                Our platform brings together cutting-edge technology, smart automation, 
                and a user-friendly design to deliver a shopping journey that's not only 
                efficient and convenient, but also genuinely enjoyable.
              </p>
            </div>
            <div className="mission-image fade-in-element" style={{ animationDelay: '1.3s' }}></div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section fade-in-section" style={{ animationDelay: '1.4s' }}>
          <div className="team-container">
            <h2 className="fade-in-element" style={{ animationDelay: '1.5s' }}>The Minds Behind TURSACart</h2>
            <p className="team-intro fade-in-element" style={{ animationDelay: '1.6s' }}>
              Meet the dedicated team working tirelessly to revolutionize your shopping experience
            </p>
            <div className="team-grid">
              {/* Team Member 1 */}
              <div className="team-card fade-in-element" style={{ animationDelay: '1.7s' }}>
                <div
                  className="member-photo"
                  style={{ backgroundImage: "url('/images/frame1.jpeg')" }}
                ></div>
                <h3>Ryan Ravikumar</h3>
                <p>CEO & Founder</p>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/ryan-ravikumar" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="social-icon" />
                  </a>
                  <a href="https://github.com/ryanravikumar" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="social-icon" />
                  </a>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="team-card fade-in-element" style={{ animationDelay: '1.8s' }}>
                <div
                  className="member-photo"
                  style={{ backgroundImage: "url('/images/frame2.jpeg')" }}
                ></div>
                <h3>Thusathmi Sapumanage</h3>
                <p>CEO & Founder</p>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/thusathmi-sapumanage" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="social-icon" />
                  </a>
                  <a href="https://github.com/thusathmi" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="social-icon" />
                  </a>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="team-card fade-in-element" style={{ animationDelay: '1.9s' }}>
                <div
                  className="member-photo"
                  style={{ backgroundImage: "url('/images/frame3.jpeg')" }}
                ></div>
                <h3>Semal Fernando</h3>
                <p>CEO & Founder</p>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/semalfernando" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="social-icon" />
                  </a>
                  <a href="https://github.com/SemalFernando" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="social-icon" />
                  </a>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="team-card fade-in-element" style={{ animationDelay: '2.0s' }}>
                <div
                  className="member-photo"
                  style={{ backgroundImage: "url('/images/frame4.jpeg')" }}
                ></div>
                <h3>Umar Fareed</h3>
                <p>CEO & Founder</p>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/umarfareed" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="social-icon" />
                  </a>
                  <a href="https://github.com/umarfareed" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="social-icon" />
                  </a>
                </div>
              </div>

              {/* Team Member 5 */}
              <div className="team-card fade-in-element" style={{ animationDelay: '2.1s' }}>
                <div
                  className="member-photo"
                  style={{ backgroundImage: "url('/images/frame5.jpeg')" }}
                ></div>
                <h3>Abdur Fareed</h3>
                <p>CEO & Founder</p>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/abdurfareed" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="social-icon" />
                  </a>
                  <a href="https://github.com/abdurfareed" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="social-icon" />
                  </a>
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
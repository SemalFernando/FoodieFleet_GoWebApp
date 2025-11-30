import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Fresh Ingredients',
    subtitle: 'Farm-to-table goodness in every bite',
    cta: 'Explore Menu'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Gourmet Delights',
    subtitle: 'Crafted with passion, served with love',
    cta: 'Order Now'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1981&q=80',
    title: 'Fast Delivery',
    subtitle: 'Hot & fresh at your doorstep in 30 minutes',
    cta: 'Get Started'
  }
];

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-overlay"></div>
          {index === currentSlide && (
            <div className="hero-content">
              <div className="hero-badge">
                <span>🍕 Fresh & Tasty</span>
              </div>
              <h1>
                <span className="hero-title">{slide.title}</span>
              </h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <div className="hero-actions">
                <button className="btn btn-primary hero-cta">
                  {slide.cta}
                </button>
                <button className="btn btn-secondary">
                  View Specials
                </button>
              </div>
              <div className="hero-features">
                <div className="feature">
                  <span className="feature-icon">🚚</span>
                  <span>Free Delivery</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">⭐</span>
                  <span>4.9 Rating</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">⏱️</span>
                  <span>30 Min</span>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      
      <button className="slider-btn prev" onClick={prevSlide} aria-label="Previous slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      <button className="slider-btn next" onClick={nextSlide} aria-label="Next slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>
      
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;
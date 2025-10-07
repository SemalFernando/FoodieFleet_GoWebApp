import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
    alt: 'Shopping experience'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
    alt: 'Online shopping'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
    alt: 'Shopping cart'
  }
];

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {index === currentSlide && (
            <div className="welcome-box">
              <h1>
                <span className="welcome-line">Welcome</span>
                <span className="to-line">To</span>
                <span className="brand-line">FoodieFleet!</span>
              </h1>
              <p className="subtitle">Easy, tasty, and just a click away — your food adventure starts here.</p>
              <div className="login-info">Login to your account</div>
            </div>
          )}
        </div>
      ))}
      <button className="slider-btn prev" onClick={prevSlide}>&#10094;</button>
      <button className="slider-btn next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
}

export default HeroSlider;
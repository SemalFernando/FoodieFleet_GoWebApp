import React from 'react';
import Header from '../../components/Header/Header';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <Header />
      <HeroSlider />
      {/* We'll add more sections here later - featured products, categories, etc. */}
    </div>
  );
}

export default Home;
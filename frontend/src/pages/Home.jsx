import React from 'react';
import Header from '../components/Header/Header';
import HeroSlider from '../components/HeroSlider/HeroSlider';  // Correct path
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <Header />
      <HeroSlider />
    </div>
  );
}

export default Home;
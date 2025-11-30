import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import { FaStar, FaFire, FaLeaf } from 'react-icons/fa';
import './Menu.css';

function Menu() {
  const [fadeIn, setFadeIn] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const menuItems = [
    {
      id: 1,
      name: "Truffle Mushroom Pizza",
      category: "pizza",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      description: "Wood-fired pizza with wild mushrooms, truffle oil, and three cheeses",
      tags: ["vegetarian", "popular"]
    },
    {
      id: 2,
      name: "Gourmet Burger",
      category: "burgers",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      description: "Angus beef patty with aged cheddar, caramelized onions, and secret sauce",
      tags: ["popular", "spicy"]
    },
    {
      id: 3,
      name: "Salmon Teriyaki",
      category: "asian",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      description: "Fresh salmon glazed with homemade teriyaki sauce, served with jasmine rice",
      tags: ["healthy"]
    },
    {
      id: 4,
      name: "Avocado Toast",
      category: "breakfast",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      description: "Sourdough toast with smashed avocado, cherry tomatoes, and microgreens",
      tags: ["vegetarian", "healthy"]
    },
    {
      id: 5,
      name: "Chocolate Lava Cake",
      category: "desserts",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      description: "Warm chocolate cake with molten center, served with vanilla ice cream",
      tags: ["popular"]
    },
    {
      id: 6,
      name: "Mediterranean Bowl",
      category: "salads",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.5,
      description: "Quinoa bowl with roasted vegetables, feta, and lemon-tahini dressing",
      tags: ["vegetarian", "healthy"]
    },
    {
      id: 7,
      name: "Spicy Tuna Roll",
      category: "asian",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      description: "Fresh tuna with spicy mayo, cucumber, and sesame seeds",
      tags: ["spicy"]
    },
    {
      id: 8,
      name: "BBQ Chicken Wings",
      category: "appetizers",
      price: 13.99,
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      description: "Crispy wings tossed in homemade BBQ sauce with ranch dip",
      tags: ["popular", "spicy"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Items', icon: '🍽️' },
    { id: 'pizza', name: 'Pizza', icon: '🍕' },
    { id: 'burgers', name: 'Burgers', icon: '🍔' },
    { id: 'asian', name: 'Asian', icon: '🍜' },
    { id: 'breakfast', name: 'Breakfast', icon: '🥞' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'salads', name: 'Salads', icon: '🥗' },
    { id: 'appetizers', name: 'Appetizers', icon: '🍤' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const addToCart = (item) => {
    setCart([...cart, item]);
    // You can add toast notification here
  };

  const getTagIcon = (tag) => {
    switch(tag) {
      case 'popular': return <FaFire className="tag-icon" />;
      case 'healthy': return <FaLeaf className="tag-icon" />;
      case 'spicy': return <span className="tag-icon">🌶️</span>;
      case 'vegetarian': return <span className="tag-icon">🌱</span>;
      default: return null;
    }
  };

  return (
    <div className={`menu-page ${fadeIn ? 'fade-in-active' : ''}`}>
      <Header />
      <main className="menu-container">
        {/* Hero Section */}
        <section className="menu-hero fade-in-section" style={{ animationDelay: '0.2s' }}>
          <div className="hero-content">
            <h1 className="fade-in-element" style={{ animationDelay: '0.4s' }}>Our Menu</h1>
            <p className="hero-subtitle fade-in-element" style={{ animationDelay: '0.6s' }}>
              Discover chef-crafted dishes made with the finest ingredients
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="categories-section fade-in-section" style={{ animationDelay: '0.8s' }}>
          <div className="categories-container">
            <div className="categories-scroll">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-name">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Grid */}
        <section className="menu-grid-section fade-in-section" style={{ animationDelay: '1s' }}>
          <div className="menu-grid-container">
            <div className="menu-grid">
              {filteredItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="menu-card fade-in-element" 
                  style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                >
                  <div className="card-image">
                    <img src={item.image} alt={item.name} />
                    <div className="card-overlay">
                      <button 
                        className="add-to-cart-btn"
                        onClick={() => addToCart(item)}
                      >
                        Add to Cart
                      </button>
                    </div>
                    {item.tags.includes('popular') && (
                      <div className="popular-badge">
                        <FaFire /> Popular
                      </div>
                    )}
                  </div>
                  <div className="card-content">
                    <div className="card-header">
                      <h3>{item.name}</h3>
                      <div className="price">${item.price}</div>
                    </div>
                    <div className="rating">
                      <FaStar className="star-icon" />
                      <span>{item.rating}</span>
                    </div>
                    <p className="description">{item.description}</p>
                    <div className="tags">
                      {item.tags.map(tag => (
                        <span key={tag} className={`tag tag-${tag}`}>
                          {getTagIcon(tag)}
                          {tag.charAt(0).toUpperCase() + tag.slice(1)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="menu-cta fade-in-section" style={{ animationDelay: '2s' }}>
          <div className="cta-container">
            <h2>Ready to Order?</h2>
            <p>Get your favorite dishes delivered in 30 minutes or less!</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Order Now</button>
              <button className="btn btn-secondary">View Full Menu</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Menu;
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <NavLink to="/" className="logo">
                    <div className="logo-icon">🍕</div>
                    <div className="logo-text">FreshBite</div>
                    <div className="logo-scan"></div>
                </NavLink>
                <nav className="nav-center">
                    <NavLink
                        to="/"
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        end
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/menu"
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    >
                        Menu
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    >
                        Contact
                    </NavLink>
                </nav>
                <div className="header-actions">
                    <button className="cart-btn">
                        <span className="cart-icon">🛒</span>
                        <span className="cart-count">0</span>
                    </button>
                    <NavLink to="/login" className="login-btn">
                        <span className="btn-text">Order Now</span>
                        <span className="btn-icon">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </span>
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header;
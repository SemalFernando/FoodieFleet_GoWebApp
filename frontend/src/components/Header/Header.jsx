import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <NavLink to="/" className="logo">
                    <div className="logo-scan"></div>
                    <div className="logo-text">FoodieFleet</div>
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
                        to="/about"
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    >
                        About us
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    >
                        Contact us
                    </NavLink>
                </nav>
                <NavLink
                    to="/login"
                    className="login-btn"
                >
                    <span className="btn-text">Login</span>
                    <span className="btn-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </span>
                </NavLink>
            </div>
        </header>
    );
}

export default Header;
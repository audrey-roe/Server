import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  // Function to handle search submission
    const handleSearch = (e) => {
        e.preventDefault();
        // Handle search functionality here
    };

    // Function to handle profile dropdown click
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const handleInputChange = () => {
        // Handle  event handler to trigger search
    };

    const handleNotification = () =>{

    };

    const handleLogout = () =>{

    };

    const handleProfileDropdown = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    return (
        <header>
        <nav className="nav-bar">
            <div className="search-bar">
                <form onSubmit={handleSearch}>
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    <input
                    type="text"
                    placeholder="Search (i)"
                    className="search-input"
                    onChange={handleInputChange} 
                    />
                </form>
            </div>
            
            <div className="profile-dropdown">
            <button onClick={handleProfileDropdown} className="profile-button">
            <FontAwesomeIcon icon={faUser} className="profile-icon" />
            <span className="username">Username</span>
            <FontAwesomeIcon icon={faChevronDown} className="down-arrow-icon" />
            </button>

            {/* Add profile information dropdown content here */}
            {isProfileDropdownOpen && (
                <div className="dropdown-content">
                <ul>
                    <li>Profile</li>
                    <li>Settings</li>
                    <li>Sign Out</li>
                </ul>
                </div>
            )}
            </div>
            <div className="notification">
            <button className="notification-button" onClick={handleNotification}>
                <FontAwesomeIcon icon={faBell} className="notification-icon" />
            </button>
            </div>

            <div className="logout">
            <button className="logout-button" onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} className="logout-icon" />
                <span className="logout-text">Logout</span>
            </button>
            </div>

        </nav>
        </header>

    );
};

export default Header;

import React from 'react';
import './Header.css';
import headerImg from '../../assets/header_image1.jpeg';

const Header = () => {
  return (
    <div className="header" style={{ backgroundImage: `url(${headerImg})` }}>
      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>Choose from a rich menu showcasing delectable dishes prepared with the best ingredients and culinary expertise. At Nosh & Nook, our mission is to fulfill your cravings and enhance your dining journey, one savory meal at a time.</p>
        <button><a href="#explore-menu">View Menu</a></button>
      </div>
    </div>
  );
};

export default Header;

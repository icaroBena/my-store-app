import React from 'react';
import { Link } from 'react-router-dom';
import '../components/WelcomeMessage.css'; 
import Planta from '../assets/planta.png'

const WelcomeMessage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">GARDEN SHOP</div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <main className="main-content">
        <div className="text-content">
          <h1>Welcome to Garden Shop</h1>
          <p>Discover our range of gardening products and services to keep your garden green and healthy.</p>
          <Link to="/products" className="btn">Saiba mais</Link>
        </div>
        <div className="image-content">
          <img src={Planta} alt="Garden" className="main-image" />
        </div>
      </main>
    </div>
  );
};

export default WelcomeMessage;
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <Link to="/" className="Header__item">Home</Link>
        <Link to="favorites" className="Header__item">My Favorites</Link>
      </header>
    );
  }
}

export default Header;
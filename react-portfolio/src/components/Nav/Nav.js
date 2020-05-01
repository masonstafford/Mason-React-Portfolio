import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <header>
          <nav className="navbar">
              <ul className="navbar--link">
                  <li className="navbar--link-item"><a data-page="about" href="#">About</a></li>
                  <li className="navbar--link-item"><a data-page="projects" href="#">Projects</a></li>
                  <li className="navbar--link-item"><a data-page="contact" href="#">Contact</a></li>
                  <div className="bubble"></div>
              </ul>
          </nav>
        </header>
    );
  }
  
  export default Nav;
  
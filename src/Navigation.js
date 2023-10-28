import React from 'react'; // Import React from react package
import './Navigation.css'; // Import styling from Naviagtion.css

function Navigation() { // Defines function Navication
  return ( // Returns JSX to be rendered with styles
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="/">Home</a></li>
        <li className="nav-item"><a href="/">About</a></li>
        <li className="nav-item"><a href="/">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;

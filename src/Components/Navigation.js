import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <header className="header">
    <h1 className="header-heading">Math Magicians</h1>
    <nav>
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/calculator">
            Calculator
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Quotes">
            Quotes
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;

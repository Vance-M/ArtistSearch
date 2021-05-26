import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav>
        <NavLink exact to="/">
          Search Page
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;

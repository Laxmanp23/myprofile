// File: src/Screens/Common/Header.jsx

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-customBlue text-white p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10">
      <h1 className="text-xl font-bold italic">laxmanpawar.site</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline font-bold">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline font-bold">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

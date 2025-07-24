// components/Header.js

import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">Python Tutorial</Link>
      <nav>
        <Link to="/live-class">
  <button className="join-live-btn">📡 Join Live Class</button>
</Link>

        <Link to="/tutorial">Tutorial</Link>
        <Link to="/playground">Playground</Link>
        <Link to="/test">Test</Link> {/* ✅ Add this line */}
      </nav>
    </header>
  );
}

export default Header;

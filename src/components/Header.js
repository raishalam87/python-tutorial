import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">Python Tutorial</Link>
      <nav>
        <Link to="/tutorial">Tutorial</Link>
        <Link to="/playground">Playground</Link>
      </nav>
    </header>
  );
}

export default Header;

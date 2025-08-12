import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header-top">
        <Link to="/" className="logo">FRONTIER <span className="logos">CODE </span>SCHOOL</Link>

        {/* ✅ Toggle button on right side */}
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
      </div>

      {/* ✅ Sliding Nav Menu */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Link to="/live-class">
          <button className="join-live-btn">📡 Join Live Class</button>
        </Link>

        <Link to="/tutorial">Tutorial</Link>
        <Link to="/playground">Playground</Link>
        <Link to="/leaderboard">🏆 Leaderboard</Link>


        {/* ✅ Dropdown Test Menu */}
        <div
          className={`dropdown ${dropdownOpen ? "active" : ""}`}
          onClick={toggleDropdown}
        >
          <button className="dropbtn">Test ⏷</button>
          <div className="dropdown-content">
            <Link to="/topic-test/3">Variables Test</Link>
            <Link to="/topic-test/4">Data Types Test</Link>
            <Link to="/topic-test/5">Operators Test</Link>
            <Link to="/topic-test/6">Conditional Test</Link>
            <Link to="/topic-test/8">Loops Test</Link>
            <Link to="/topic-test/14">Functions Test</Link>
            <Link to="/topic-test/17">Lists Test</Link>
            <Link to="/topic-test/18">Tuple / Set / Dictionary Test</Link>
            <Link to="/topic-test/16">File Handling Test</Link>
          </div>
        </div>

        {/* ✅ Auth Section */}
        {user ? (
          <>
            <Link to="/profile">🙋 Profile</Link>
            <button onClick={handleLogout} className="join-live-btn">🚪 Logout</button>
          </>
        ) : (
          <>
           
            <Link to="/login">Sign In</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;

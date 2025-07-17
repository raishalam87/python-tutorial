import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import '../style/Home.css';
import ContactWidget from "../components/ContactWidget"; // ✅ Import the widget

function Home() {
  return (
    <div className="home-container">
      <video autoPlay loop muted className="background-video">
        <source src="https://videos.pexels.com/video-files/6330779/6330779-hd_1920_1080_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" 
          alt="Python Logo" 
          className="python-logo"
        />
        <h1>Welcome to Python Tutorial</h1>
        <p>Learn Python step by step with examples and an interactive playground.</p>
        <Link to="/tutorial" className="btn">Start Learning</Link>
      </div>

      {/* ✅ Contact widget placed here */}
      <ContactWidget />
    </div>
  );
}

export default Home;

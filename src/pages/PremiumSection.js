import React from "react";
import "./PremiumSection.css";

const PremiumSection = () => {
  return (
    <section className="premium-section">
      <h2 className="premium-title">🔥 Premium Learning Programs</h2>
      <div className="premium-cards">

        {/* Card 1: Live Project + CBSE */}
        <div className="premium-card premium-gold">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5957/5957455.png"
            alt="CBSE Project"
            className="premium-image"
          />
          <h3>Live Projects + CBSE Board Preparation</h3>
          <p>
            Learn coding from scratch and prepare for CBSE Board with real-time industrial projects guided by experts.
          </p>
          <div className="price">₹499</div>
          <div className="premium-buttons">
            <a href="https://wa.me/919000000000" target="_blank" rel="noreferrer">
              <button className="join-btn">Join Now</button>
            </a>
            <button className="learn-btn">Learn More</button>
          </div>
        </div>

        {/* Card 2: 100+ Real Projects */}
        <div className="premium-card premium-platinum">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
            alt="100+ Projects"
            className="premium-image"
          />
          <h3>100+ Real-Life Projects (All in One)</h3>
          <p>
            Get hands-on experience with over 100 real-life projects in web, mobile, backend, and full-stack development.
          </p>
          <div className="price">₹899</div>
          <div className="premium-buttons">
            <a href="https://wa.me/919000000000" target="_blank" rel="noreferrer">
              <button className="join-btn">Join Now</button>
            </a>
            <button className="learn-btn">Learn More</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PremiumSection;

// src/components/WhyChooseUs.js
import React from "react";
import "./WhyChooseUs.css";
import {
  FaHeadset,
  FaShoppingCart,
  FaClock,
  FaLaptopCode,
  FaSchool,
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="choose-us-section">
      <div className="choose-us-container">
        <h2 className="choose-us-title">Why Choose Us?</h2>
        <div className="choose-us-cards">
          <div className="choose-card">
            <FaHeadset className="choose-icon" />
            <h3>24x7 Mentorship</h3>
            <p>
              Get support anytime from expert mentors to clear your doubts via
              chat, call, or mail.
            </p>
          </div>

          <div className="choose-card">
            <FaShoppingCart className="choose-icon" />
            <h3>Buy Courses</h3>
            <p>
              Affordable premium courses starting from ₹299. Learn at your own
              pace.
            </p>
            <button className="choose-btn">Explore Courses</button>
          </div>

          <div className="choose-card premium-batch-card">
            <FaClock className="choose-icon" />
            <h3>New Batch</h3>
            <p className="highlight-date">
              <strong className="highlight-date-bold">Next batch starts on 10 August 2025</strong>
            </p>
            <p>Enroll now and kickstart your journey!</p>
            <button className="choose-btn premium-btn">Join Now</button>
          </div>

          <div className="choose-card">
            <FaLaptopCode className="choose-icon" />
            <h3>Live Projects</h3>
            <p>
              Build real-time industry-level projects like E-Commerce, Chat App,
              Portfolio & more.
            </p>
          </div>

          <div className="choose-card">
            <FaSchool className="choose-icon" />
            <h3>CBSE Board Preparation</h3>
            <p>
              Start from scratch and prepare for Class 11 & 12 CS/IT board exams
              with structured guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

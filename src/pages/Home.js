import React from "react";
import CoursesSection from './CoursesSection'
import PremiumSection from "./PremiumSection";
import MentorSection from './MentorSection';
import StudentReview from './StudentReviews'
import WhyChooseUs from "./WhyChooseUs";
import ContactForm from "./ContactForm";
import StudentSlider from '../components/StudentSlider'
import Footer from "./Footer";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
import "../style/Home.css";

const Completionist = () => <span>Offer ended!</span>;

const Home = () => {
  const offerEndDate = new Date("2025-08-10T23:59:59");

  return (
    <div>
    <div className="home-section">
      <div className="home-content">
        <h2 className="heading">New Batch Starting <span className="highlight">10 August</span></h2>
        <p className="subtext">
          Join our CBSE & Industry-based Python course. Limited seats only! <br />
          Grab your seat with <strong>24x7 mentorship support</strong> and <strong>100+ live projects</strong>.
        </p>

        <div className="offer-card">
          <h3 className="offer-title">🎉 Best Offer Ending In</h3>
          <Countdown date={offerEndDate} daysInHours={false} renderer={({ days, hours, minutes, seconds, completed }) =>
            completed ? <Completionist /> : (
              <span className="timer">
                {days}d : {hours}h : {minutes}m : {seconds}s
              </span>
            )
          } />
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="home-image">
        <img
          src="https://assets.skyfilabs.com/playto/blog-images/coding-for-kids-complete-guide.png"
          alt="Kids coding"
        />
      </div>
      </div>
      <StudentSlider />
      <CoursesSection />
      <PremiumSection />
      <MentorSection />
      <StudentReview />
      <WhyChooseUs />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;

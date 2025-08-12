// src/components/StudentReviews.js
import React from "react";
import Slider from "react-slick";
import "./StudentReviews.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "Aman Gupta",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback: "Raish Sir explains everything very clearly with real-world examples.",
  },
  {
    name: "Priya Sharma",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback: "The classes are interactive and easy to follow. Highly recommended!",
  },
  {
    name: "Rohit Verma",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    feedback: "I learned Python and MySQL from scratch. Thank you, Raish Sir!",
  },
  {
    name: "Sneha Mehta",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    feedback: "The mentor is very supportive and helps in project-based learning.",
  },
  {
    name: "Zaid Khan",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    feedback: "Best coding class I’ve attended. Doubt solving is fast and clear.",
  },
];

const StudentReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="review-container">
      <h2 className="review-title">What Our Students Say</h2>
      <Slider {...settings}>
        {reviews.map((student, index) => (
          <div className="review-slide" key={index}>
            <div className="review-card">
              <div className="img-wrapper">
                <img src={student.image} alt={student.name} className="review-img" />
              </div>
              <p className="review-feedback">“{student.feedback}”</p>
              <p className="review-name">— {student.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StudentReviews;

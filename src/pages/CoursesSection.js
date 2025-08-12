// src/components/CoursesSection.js
import React from "react";
import { Link } from "react-router-dom";
import "./CoursesSection.css";

const courses = [
  {
    name: "Python",
    price: "₹299",
    image: "https://img.icons8.com/color/96/python.png",
    desc: "Master Python programming from basics to advanced with real-world examples.",
  },
  {
    name: "MySQL",
    price: "₹249",
    image: "https://img.icons8.com/ios-filled/100/000000/mysql-logo.png",
    desc: "Learn database design, queries, joins, and advanced SQL techniques.",
  },
  {
    name: "HTML",
    price: "₹199",
    image: "https://img.icons8.com/color/96/html-5--v1.png",
    desc: "Understand how to build the structure of any modern web page.",
  },
  {
    name: "CSS",
    price: "₹199",
    image: "https://img.icons8.com/color/96/css3.png",
    desc: "Style websites beautifully using modern CSS tools and techniques.",
  },
  {
    name: "JavaScript",
    price: "₹299",
    image: "https://img.icons8.com/color/96/javascript--v1.png",
    desc: "Add interactivity and logic to websites with JavaScript.",
  },
  {
    name: "React",
    price: "₹349",
    image: "https://img.icons8.com/officel/96/react.png",
    desc: "Create fast, dynamic and modern web apps using React JS.",
  },
  {
    name: "Canva",
    price: "₹149",
    image: "https://img.icons8.com/color/96/canva.png",
    desc: "Design professional posters, banners, and social media posts easily.",
  },
  {
    name:'Node Js',
    price:'₹149',
    image:'https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png',
    desc:'Master backend development with Node.js — the powerful JavaScript runtime used by top companies like Netflix and PayPal. ',
  },
];

const CoursesSection = () => {
  return (
    <div className="courses-container">
      <h2 className="section-title">Our Courses</h2>
      <div className="card-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.image} alt={course.name} className="course-img" />
            <h3>{course.name}</h3>
            <p className="desc">{course.desc}</p>
            <p className="price">{course.price}</p>
            <div className="button-group">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="join-btn"
              >
                Join Now
              </a>
             <Link to='/tutorial'>
              <button className="learn-btn">Learn More</button>
             </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;

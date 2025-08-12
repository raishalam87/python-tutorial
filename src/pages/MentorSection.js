// src/components/MentorSection.js
import React from "react";
import "./MentorSection.css";

const MentorSection = () => {
  return (
    <div className="mentor-container">
      <h2 className="mentor-title">Meet Your Mentor</h2>
      <div className="mentor-card">
        <img
          src="https://img.icons8.com/color/160/teacher.png"
          alt="Mentor Raish Alam"
          className="mentor-img"
        />
        <h3 className="mentor-name">Er Raish Alam</h3>
        <p className="mentor-role">Senior Software Mentor</p>
        <p className="mentor-desc">
          👨‍💻 <strong>4+ years</strong> of experience working on real-time projects in web development and automation.
        </p>
        <p className="mentor-desc">
          🎓 Completed <strong>B.Tech</strong> from <strong>MDU College</strong>, with specialization in Computer Science.
        </p>
        <p className="mentor-desc">
          🧠 Passionate about teaching, project-based learning, and guiding students for practical success.
        </p>
      </div>
    </div>
  );
};

export default MentorSection;

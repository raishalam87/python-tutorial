import React from "react";
import "./StudentSlider.css";

const studentsRow1 = [
  { name: "Milinda Reddy", role: "SDE (Intern)", companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPAWYqoR1E-YMPwd869I0X2WuToOjTrPXgQ&s", photo: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" },
  { name: "Dinesh Ganta", role: "Software Engineer Trainee", companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPAWYqoR1E-YMPwd869I0X2WuToOjTrPXgQ&s", photo: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" },
  { name: "Shubham", role: "Software Engineer", companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPAWYqoR1E-YMPwd869I0X2WuToOjTrPXgQ&s', photo: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" },
];

const studentsRow2 = [
  { name: "Sandeep Reddy", role: "Software Engineer", companyLogo: "https://companieslogo.com/img/orig/INFY-bf47e1fb.png?t=1720244492", photo: "https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg" },
  { name: "Naga Aruna", role: "Software Engineer", companyLogo: "https://companieslogo.com/img/orig/INFY-bf47e1fb.png?t=1720244492", photo: "https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg" },
  { name: "Ananya Singh", role: "Design Engineer", companyLogo: "https://companieslogo.com/img/orig/INFY-bf47e1fb.png?t=1720244492", photo: "https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg" },
];

function SliderRow({ students, direction }) {
  return (
    <div className={`achievements-track ${direction}`}>
      {students.concat(students).map((student, index) => (
        <div className="achievement-card" key={index}>
          <img src={student.photo} alt={student.name} className="student-photo" />
          <div>
            <h4>{student.name}</h4>
            <p>{student.role}</p>
            <img src={student.companyLogo} alt="company logo" className="company-logo" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function StudentAchievements() {
  return (
    <div className="achievements-wrapper">
      <SliderRow students={studentsRow1} direction="left" />
      <SliderRow students={studentsRow2} direction="right" />
    </div>
  );
}

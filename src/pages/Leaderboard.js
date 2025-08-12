// src/pages/Leaderboard.js
import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebaseConfig";
import './Leaderboard.css';

function Leaderboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchTopStudents = async () => {
      const q = query(
        collection(db, "students"),
        orderBy("coins", "desc"),
        limit(10)
      );
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => doc.data());
      setStudents(data);
    };

    fetchTopStudents();
  }, []);

  return (
    <div className="leaderboard-container">
      <h2>🏆 Top Students Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Coins</th>
            <th>Tests Taken</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.uid}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.coins}</td>
              <td>{student.testsTaken}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;

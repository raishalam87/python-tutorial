// ResultPage.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Test.css";
import { toast } from "react-toastify";

function ResultPage({ score, total }) {
  const navigate = useNavigate();
  const passed = score >= total / 2;
  const coins = score * 10;

  useEffect(() => {
    if (score === total) {
      toast.success("🎉 Congratulations! Perfect Score! You've unlocked a Python Star Badge!", {
        autoClose: 4000,
        position: "top-center"
      });
    }
  }, [score, total]);

  return (
    <div className="result-container">
      <h2>🎯 Test Completed</h2>
      <p><strong>Your Score:</strong> {score} / {total}</p>
      <p className={passed ? "pass" : "fail"}>
        {passed ? "✅ You Passed!" : "❌ Try Again!"}
      </p>
      <p>You earned <strong>{coins}</strong> coins 🎁</p>

      <div className="result-buttons">
        <button onClick={() => navigate('/test')}>🔁 Retest</button>
        <button onClick={() => navigate("/")}>🏠 Home</button>
      </div>
    </div>
  );
}

export default ResultPage;

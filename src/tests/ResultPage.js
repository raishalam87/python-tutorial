import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './Result.css';

function ResultPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    score = 0,
    coins = 0,
    total = 0,
    wrongAnswers = [],
    studentName = "", // ✅ get name from test page
  } = location.state || {};

  const isPassed = score >= total / 2;

  useEffect(() => {
    if (score === total) {
      toast.success(`🎉 Excellent work${studentName ? ', ' + studentName : ''}! You got a perfect score!`, {
        position: "top-center",
        autoClose: 3000,
      });
    } else if (isPassed) {
      toast.info(`✅ Great job${studentName ? ', ' + studentName : ''}! You passed the test!`, {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
      toast.warning(`📚 Try again${studentName ? ', ' + studentName : ''} and improve!`, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  }, [score, total, isPassed, studentName]);

  return (
    <div className="result-container">
      <div className="result-box">
        <h2>🎯 Test Completed</h2>
        
        {studentName && (
          <h3 className="greeting">🎉 Well done, <span className="student-name">{studentName}</span>!</h3>
        )}

        <p className="score-text">
          Your Score: <strong>{score}</strong> / {total}
        </p>

        <p className={isPassed ? "pass-msg" : "fail-msg"}>
          {isPassed ? "✅ You Passed!" : "❌ Try Again!"}
        </p>

        <p className="coin-info">
          💰 You earned <strong>{coins}</strong> coins
        </p>

        {wrongAnswers.length > 0 && (
          <div className="review-section">
            <h3>❗ Incorrect Answers</h3>
            {wrongAnswers.map((item, index) => (
              <div className="wrong-item" key={index}>
                <p><strong>Q:</strong> {item.question}</p>
                <p className="your-answer">❌ Your Answer: {item.selected}</p>
                <p className="correct-answer">✅ Correct Answer: {item.correct}</p>
              </div>
            ))}
          </div>
        )}

        <div className="btn-group">
          <button className="btn retest" onClick={() => navigate(-1)}>🔁 Retest</button>
          <button className="btn home" onClick={() => navigate("/")}>🏠 Home</button>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;

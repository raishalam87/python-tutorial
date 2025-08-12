import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dataTypesTest from "../tests/dataTypesTest";
import operatorsTest from "../tests/operatorsTest";
import conditionalTest from "../tests/conditionalTest";
import loopsTest from "../tests/loopsTest";
import functionsTest from "../tests/functionsTest";
import listsTest from "../tests/listsTest";
import fileHandlingTest from "../tests/fileHandlingTest";

import tuplesSetsDictsTest from "../tests/tuplesSetsDictsTest";




import variablesTest from "../tests/variablesTest";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Test.css'

function TopicTestPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const topicTests = {
    3: variablesTest,
    4: dataTypesTest,
    5: operatorsTest,
    6: conditionalTest,
    8: loopsTest,
    14: functionsTest,
    16: fileHandlingTest,

    17: listsTest,
    18: tuplesSetsDictsTest,





  };

  const topicTitles = {
    3: "Variables",
    4: "Data Types", 
    5: "Operators",
    6: "Conditional Statements",
    8: "Loops",
    14: "Functions",
    16: "File Handling",

    17: "Lists",
    18: "Tuple, Set & Dictionary",





  };

  const questions = topicTests[id];
  const totalTime = 30 * 60; // 30 minutes

  const [studentName, setStudentName] = useState("");
  const [testStarted, setTestStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [coins, setCoins] = useState(0);
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  useEffect(() => {
    if (testStarted) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [testStarted]);

  const formatTime = (t) => {
    const m = Math.floor(t / 60);
    const s = t % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleOptionClick = (option) => {
    if (!isChecked) {
      setSelected(option);
      setFeedback("");
    }
  };

  const handleCheck = () => {
    if (!selected) {
      toast.warn("Please select an option first!");
      return;
    }

    const current = questions[currentQ];

    if (selected === current.correctAnswer) {
      setFeedback("✅ Correct Answer!");
      setScore((prev) => prev + 1);
      setCoins((prev) => prev + 10);
    } else {
      setFeedback("❌ Wrong Answer!");
      setWrongAnswers((prev) => [
        ...prev,
        {
          question: current.question,
          selected,
          correct: current.correctAnswer,
        },
      ]);
    }

    setIsChecked(true);
  };

  const handleNext = () => {
    setSelected(null);
    setFeedback("");
    setIsChecked(false);

    if (currentQ + 1 < questions.length) {
      setCurrentQ((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    toast.info("✅ Thank you for attending the exam!", {
      position: "bottom-center",
    });

    setTimeout(() => {
      navigate("/result", {
        state: {
          score,
          coins,
          total: questions.length,
          wrongAnswers,
          studentName, // ✅ pass name to result
        },
      });
    }, 1500);
  };

  if (!questions) {
    return <h2 style={{ color: "red" }}>Test Not Found</h2>;
  }

  // ✅ Step before test starts
  if (!testStarted) {
    return (
      <div className="test-container">
        <h2>📘 {topicTitles[id] || "Topic"} Test</h2>
        <p>Please enter your name to begin:</p>
        <input
          type="text"
          placeholder="Enter your name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          className="name-input"
        />
        <button
          className="start-btn"
          onClick={() => {
            if (studentName.trim() === "") {
              toast.warn("Please enter your name first!");
              return;
            }
            setTestStarted(true);
          }}
        >
          🚀 Start Test
        </button>
      </div>
    );
  }

  const current = questions[currentQ];

  return (
    <div className="test-container">
      <h2>📘 {topicTitles[id] || "Topic"} Test</h2>
      <div className="timer">⏳ Time Left: {formatTime(timeLeft)}</div>

      <div className="question-card">
        <h3>{current.question}</h3>
        <form>
          {current.options.map((opt, idx) => (
            <label
              key={idx}
              className={`option ${selected === opt ? "selected" : ""} ${
                isChecked && opt === current.correctAnswer ? "correct" : ""
              } ${
                isChecked && selected === opt && selected !== current.correctAnswer ? "wrong" : ""
              }`}
            >
              <input
                type="radio"
                name="option"
                value={opt}
                checked={selected === opt}
                onChange={() => handleOptionClick(opt)}
                disabled={isChecked}
              />
              {opt}
            </label>
          ))}
        </form>

        {feedback && (
          <div className="feedback">
            <p>{feedback}</p>
            <p><strong>Your Answer:</strong> {selected}</p>
            <p><strong>Correct Answer:</strong> {current.correctAnswer}</p>
          </div>
        )}

        {!isChecked ? (
          <button className="check-btn" onClick={handleCheck}>
            ✅ Check Answer
          </button>
        ) : (
          <button className="next-btn" onClick={handleNext}>
            {currentQ === questions.length - 1 ? "Submit" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
}

export default TopicTestPage;

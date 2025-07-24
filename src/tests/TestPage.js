// TestPage.js
import React, { useState } from "react";
import questions from "./questions";
import Timer from "./Timer";
import "../style/Test.css";
import ResultPage from "./ResultPage";
import { toast } from "react-toastify";

function TestPage() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [timeUp, setTimeUp] = useState(false);

  const handleOptionChange = (id, value) => {
    setAnswers({ ...answers, [id]: value });
  };

  const handleCodeChange = (id, code) => {
    setAnswers({ ...answers, [id]: code });
  };

  const runCode = (code) => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(code);
      alert("Output:\n" + result);
    } catch (err) {
      alert("Error:\n" + err.message);
    }
  };

  const handleSubmit = () => {
    toast.success("✅ Test Submitted Successfully!", { autoClose: 1000 });
    setSubmitted(true);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q) => {
      const userAns = answers[q.id];
      if (q.type === "mcq" && userAns === q.answer) {
        score += q.marks;
      } else if (
        q.type === "code" &&
        userAns &&
        q.sampleOutput?.some((out) =>
          userAns.toLowerCase().includes(out.toLowerCase())
        )
      ) {
        score += q.marks;
      }
    });
    return score;
  };

  if (submitted || timeUp) {
    const score = calculateScore();
    return <ResultPage score={score} total={questions.length} />;
  }

  return (
    <div className="test-container">
      <h2>🧠 Python Test</h2>
      <Timer duration={1800} onTimeUp={() => setTimeUp(true)} />
      {questions.map((q) => (
        <div key={q.id} className="question-box">
          <p><strong>{q.id}. {q.question}</strong></p>
          {q.type === "mcq" ? (
            q.options.map((opt, i) => (
              <div key={i}>
                <label>
                  <input
                    type="radio"
                    name={`q-${q.id}`}
                    value={opt}
                    checked={answers[q.id] === opt}
                    onChange={() => handleOptionChange(q.id, opt)}
                  />
                  {opt}
                </label>
              </div>
            ))
          ) : (
            <>
              <textarea
                rows="6"
                placeholder="Write your code here..."
                value={answers[q.id] || ""}
                onChange={(e) => handleCodeChange(q.id, e.target.value)}
              />
              <div className="code-tools">
                <button onClick={() => runCode(answers[q.id] || "")}>▶️ Run</button>
              </div>
              <small>💡 Sample Input: {q.sampleInput} | Output: {q.sampleOutput.join(", ")}</small>
            </>
          )}
        </div>
      ))}
      <button className="submit-btn" onClick={handleSubmit}>🚀 Submit Test</button>
    </div>
  );
}

export default TestPage;

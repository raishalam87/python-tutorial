import React, { useState, useEffect } from "react";
import Playground from "../components/Playground";
import SearchBar from "../components/SearchBar";
import ContactWidget from "../components/ContactWidget";

import topicsData from "../data/topics";
import '../style/Feedback.css';
import '../style/Tutorial.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Tutorial() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [feedbackText, setFeedbackText] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("feedbacks")) || [];
    setFeedbacks(stored);
  }, []);

  const handleSearch = (q) => {
    setQuery(q);
    setLoading(true);
    setTimeout(() => {
      const filtered = topicsData.filter((topic) =>
        topic.title.toLowerCase().includes(q.toLowerCase())
      );
      setResults(filtered);
      setLoading(false);
    }, 1000);
  };

  const submitFeedback = () => {
    if (feedbackText.trim()) {
      const newFeedback = {
        id: Date.now(),
        text: feedbackText,
        liked: false,
        likes: 0,
      };
      const updated = [...feedbacks, newFeedback];
      setFeedbacks(updated);
      localStorage.setItem("feedbacks", JSON.stringify(updated));
      setFeedbackText("");
      toast.success("Thank you for your feedback!");
    } else {
      toast.error("Feedback cannot be empty!");
    }
  };

  const toggleLike = (id) => {
    const updated = feedbacks.map((fb) => {
      if (fb.id === id) {
        const liked = !fb.liked;
        const likes = liked ? fb.likes + 1 : fb.likes - 1;
        return { ...fb, liked, likes };
      }
      return fb;
    });
    setFeedbacks(updated);
    localStorage.setItem("feedbacks", JSON.stringify(updated));
  };

  const deleteFeedback = (id) => {
    const updated = feedbacks.filter((fb) => fb.id !== id);
    setFeedbacks(updated);
    localStorage.setItem("feedbacks", JSON.stringify(updated));
    toast.info("Feedback deleted");
  };

  return (
    <div className="tutorial-page">
      <div className="sidebar">
        {topicsData.map((topic) => (
          <div
            key={topic.id}
            className="sidebar-item"
            onClick={() => handleSearch(topic.title)}
          >
            {topic.title}
          </div>
        ))}
      </div>

      <div className="content-area">
        <SearchBar onSearch={handleSearch} />
        
        {loading ? (
          <div className="images">
            <img
              className="img"
              src="https://icons8.com/preloaders/preloaders/496/Flip%20Flop.gif"
              alt="Loading"
            />
          </div>
        ) : results.length > 0 ? (
          results.map((topic) => (
            <div key={topic.id} className="topic-box">
              <h2>{topic.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: topic.description }} />
              <pre className="syntax-box">{topic.syntax}</pre>
              <Playground exampleCode={topic.example} />
            </div>
          ))
        ) : (
          <div className="no-topic-container">
            <p className="no-topic-message">
              {query ? "No topic found." : "Search for a topic above."}
            </p>
          </div>
        )}

        {/* ✅ Feedback Section */}
        <div className="feedback-section">
          <h3>Feedback</h3>
          <textarea
            rows="4"
            placeholder="Write your feedback..."
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
          ></textarea>
          <button onClick={submitFeedback}>Submit Feedback</button>
          
          <ul className="feedback-list">
            {feedbacks.map((fb) => (
              <li key={fb.id} className="feedback-item">
                <span>{fb.text}</span>
                <div className="feedback-actions">
                  <button onClick={() => toggleLike(fb.id)} title="Like">
                    {fb.liked ? "❤️" : "🤍"} {fb.likes}
                  </button>
                  <button onClick={() => deleteFeedback(fb.id)} title="Delete">
                    🗑️
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 🔔 Toast container */}
      <ToastContainer position="bottom-right" />
      <ContactWidget />

    </div>
  );
}

export default Tutorial;

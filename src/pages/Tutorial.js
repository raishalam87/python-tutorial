import React, { useState, useEffect } from "react";
import Playground from "../components/Playground";
import SearchBar from "../components/SearchBar";
import ContactWidget from "../components/ContactWidget";

import topicsData from "../data/topics";       // Python
import mysqlData from "../data/mysqldata";     // MySQL
import htmlData from "../data/htmldata";       // HTML
import cssData from "../data/cssdata";         // CSS
import jsData from "../data/jsdata";           // JavaScript
import es6Data from "../data/es6data";         // ES6
import reactData from "../data/reactdata";     // React

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
  const [feedbackName, setFeedbackName] = useState("");   
  const [selectedCategory, setSelectedCategory] = useState("Python");

  // ✅ Subjects data map (fallback [] lagaya)
  const subjects = {
    Python: topicsData || [],
    MySQL: mysqlData || [],
    HTML: htmlData || [],
    CSS: cssData || [],
    JavaScript: jsData || [],
    ES6: es6Data || [],
    React: reactData || [],
  };

  // ✅ Merge all for search
  const allTopics = Object.entries(subjects).flatMap(([subject, data]) =>
    Array.isArray(data) ? data.map((topic) => ({ ...topic, subject })) : []
  );

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("feedbacks")) || [];
    setFeedbacks(stored);
  }, []);

  const handleSearch = (q) => {
    setQuery(q);
    setLoading(true);
    setTimeout(() => {
      const filtered = allTopics.filter((topic) =>
        topic.title?.toLowerCase().includes(q.toLowerCase())
      );
      setResults(filtered);
      setLoading(false);
    }, 1000);
  };

  const submitFeedback = () => {
    if (!feedbackName.trim()) {
      toast.error("Please enter your name!");
      return;
    }

    if (feedbackText.trim()) {
      const newFeedback = {
        id: Date.now(),
        name: feedbackName,
        text: feedbackText,
        liked: false,
        likes: 0,
      };
      const updated = [...feedbacks, newFeedback];
      setFeedbacks(updated);
      localStorage.setItem("feedbacks", JSON.stringify(updated));
      setFeedbackText("");
      setFeedbackName("");  
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
      {/* ✅ Sidebar */}
      <div className="sidebar">
        {/* Dropdown for selecting category */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-dropdown"
        >
          {Object.keys(subjects).map((subj) => (
            <option key={subj} value={subj}>
              {subj}
            </option>
          ))}
        </select>

        {/* Topics for selected category */}
        {Array.isArray(subjects[selectedCategory]) &&
          subjects[selectedCategory].map((topic) => (
            <div
              key={topic.id}
              className="sidebar-item"
              onClick={() => handleSearch(topic.title)}
            >
              {topic.title}
            </div>
          ))}
      </div>

      {/* ✅ Main Content */}
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
              <h2>
                {topic.title}{" "}
                <span className="subject-tag">({topic.subject})</span>
              </h2>
              <div dangerouslySetInnerHTML={{ __html: topic.description }} />
              {topic.syntax && <pre className="syntax-box">{topic.syntax}</pre>}
              {topic.example && <Playground exampleCode={topic.example} />}
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
          <input
            type="text"
            placeholder="Enter your name..."
            value={feedbackName}
            onChange={(e) => setFeedbackName(e.target.value)}
          />
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
                <strong>{fb.name}:</strong> {fb.text}
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

      <ToastContainer position="bottom-right" />
      <ContactWidget />
    </div>
  );
}

export default Tutorial;

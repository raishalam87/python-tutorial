import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Tutorial from "./pages/Tutorial";
import Header from "./components/Header";
import Playground from "./components/Playground";
import ChatBox from './components/ChatBox';
import NotFound from "./pages/NotFound";
import TestPage from "./tests/TestPage";
import ResultPage from "./tests/ResultPage";
import TopicTestPage from "./pages/TopicTestPage";
import LiveClass from "./pages/LiveClass";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

// 🔐 Student System Pages
import Register from "./student/Register";
import Login from "./student/Login";
import Profile from "./student/Profile";
import StudentHome from "./student/StudentHome";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/live-class" element={<LiveClass />} />
        <Route path="/topic-test/:id" element={<TopicTestPage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
       
        {/* 🔐 Student Auth Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/student-home" element={<StudentHome />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer position="bottom-right" />
      <ChatBox />
    </Router>
  );
}

export default App;

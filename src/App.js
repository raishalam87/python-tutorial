import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tutorial from "./pages/Tutorial";
import Header from "./components/Header";
import Playground from "./components/Playground";
import NotFound from "./pages/NotFound";
import TestPage from "./tests/TestPage";        // ✅ Already added
import ResultPage from "./tests/ResultPage";    // ✅ ADD THIS
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LiveClass from "./pages/LiveClass";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/result" element={<ResultPage />} /> {/* ✅ ADD THIS LINE */}
        <Route path="/live-class" element={<LiveClass />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer position="bottom-right" />
    </Router>
  );
}

export default App;

// pages/LiveClass.js

import React from "react";
import "./LiveClass.css";

function LiveClass() {
  return (
    <div className="live-class-container">
      <h1 className="live-class-heading">📡 Live Python Class</h1>
      <p className="live-class-subtitle">
        Welcome to your live interactive Python session. Please wait for the host to start the class, or join using the link below.
      </p>

      <div className="live-class-iframe-wrapper">
        <iframe
          src="https://meet.jit.si/PythonLiveClass"
          allow="camera; microphone; fullscreen; display-capture"
          title="Live Python Class"
          className="live-class-iframe"
        ></iframe>
      </div>
    </div>
  );
}

export default LiveClass;

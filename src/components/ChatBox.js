// src/components/ChatBox.js
import React, { useEffect, useState } from "react";
import socket from "../socket";
import "./ChatBox.css";


function ChatBox() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    socket.on("message", (data) => {
      setMessages((prev) => [...prev, data]);
    });
    return () => socket.off("message");
  }, []);

  const sendMessage = () => {
    if (message.trim() !== "") {
      socket.emit("message", message);
      setMessage("");
    }
  };

  return (
    <div className="chatbox-wrapper">
      <img
        src="https://t3.ftcdn.net/jpg/05/79/53/10/240_F_579531052_fgvLTO2MrKrJKbQjpvqhgPFAzJAHJ4iN.jpg"
        alt="Chat"
        className="chatbox-icon"
        onClick={() => setOpen(!open)}
      />

      {open && (
        <div className="chatbox-popup">
          <div className="chatbox-header">💬 Student Chat</div>
          <div className="chatbox-messages">
            {messages.map((msg, index) => (
              <div key={index} className="chatbox-msg">{msg}</div>
            ))}
          </div>
          <div className="chatbox-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBox;

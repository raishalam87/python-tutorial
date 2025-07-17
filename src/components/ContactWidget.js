import React, { useState } from "react";
import "../style/ContactWidget.css";
import { FaComments, FaEnvelope, FaPhoneAlt, FaTimes, FaWhatsapp, FaVideo } from "react-icons/fa";

function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="contact-widget" onClick={() => setIsOpen(!isOpen)}>
        <FaComments size={24} />
      </div>

      {isOpen && (
        <div className="chat-popup">
          <div className="chat-header">
            <h4>👋 Hello!</h4>
            <FaTimes className="close-icon" onClick={() => setIsOpen(false)} />
          </div>
          <p>Thank you for visiting 🙏</p>
          <p>How can we help you today?</p>
          <div className="contact-info">
            <p><FaEnvelope /> Email: <a href="mailto:python.support@example.com">python.support@example.com</a></p>
            <p><FaPhoneAlt /> Phone: <a href="tel:+919876543210">+91 98765 43210</a></p>
            <p><FaWhatsapp /> WhatsApp: <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></p>
            <button className="live-class-btn">
              <FaVideo /> Join Live Class
            </button>
            <p className="note">🕐 We usually reply within a few hours.</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactWidget;

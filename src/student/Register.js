// src/student/Register.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerStudent } from "./studentAPI";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await registerStudent({ name, email, password });

    if (res.success) {
      toast.success("✅ Registered successfully!");
      setTimeout(() => navigate("/login"), 1500);
    } else {
      toast.error("❌ " + res.message);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleRegister}>
        <h2>📝 Register New Student</h2>

        <div className="input-group">
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group password-group">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button type="submit">Register</button>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link className="link" to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;

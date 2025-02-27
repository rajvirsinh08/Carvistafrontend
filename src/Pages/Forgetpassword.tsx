import React, { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import fp from "../Assets/Images/fp.png";
import { useNavigate } from "react-router-dom";
const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate(); // Initialize navigation hook
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setError(validateEmail(value) ? "" : "Please enter a valid email address");
  };
  const handleForgotPassword = async () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/user/forgot-password", { email });
      if (response.status === 200) {
        localStorage.setItem("email", email); // Store email in localStorage
        alert("OTP sent to your email!"); // Optional alert
        navigate("/otpverification", { state: { email } }); // Navigate to OTP verification with email
      }
    } catch (err) {
      setError("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  // const handleForgotPassword = async () => {
  //   if (!validateEmail(email)) {
  //     setError("Please enter a valid email address");
  //     return;
  //   }
  //   setLoading(true);
  //   setError("");
  //   setMessage("");
  //   try {
  //     const response = await axios.post("http://localhost:5000/api/forgot-password", { email });
  //     setMessage(response.data.message);
  //   } catch (err: any) {
  //     setError(err.response?.data?.error || "Something went wrong. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to right, #FF714A, #FF9359)",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "10px",
          width: "350px",
          textAlign: "center",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        {/* Illustration */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={fp} alt="Forgot Password" style={{ width: "80px", height: "80px", marginBottom: "15px" }} />
        </div>
        {/* Title */}
        <h2 style={{ margin: 0, fontFamily: "Arial, sans-serif", color: "#333" }}>Forgot your password?</h2>
        <p style={{ color: "#777", fontSize: "14px", marginTop: "5px" }}>
          Enter your email so that we can send you a password reset OTP
        </p>
        {/* Email Input */}
        <div style={{ textAlign: "left", marginTop: "15px" }}>
          <label style={{ fontSize: "14px", fontWeight: "bold", color: "#333" }}>Email</label>
          <input
            type="email"
            placeholder="e.g. username@example.com"
            value={email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "20px",
              marginTop: "5px",
              fontSize: "14px",
              outline: "none",
            }}
          />
          {error && <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>{error}</p>}
          {message && <p style={{ color: "green", fontSize: "12px", marginTop: "5px" }}>{message}</p>}
        </div>
        {/* Send Email Button */}
        <button
          onClick={handleForgotPassword}
          disabled={!email || !!error || loading}
          style={{
            width: "100%",
            padding: "12px",
            background: !email || error || loading ? "#ccc" : "#FF714A",
            color: "white",
            border: "none",
            borderRadius: "20px",
            fontSize: "16px",
            marginTop: "20px",
            cursor: !email || error || loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Sending..." : "Send OTP"}
        </button>
        {/* Back to Login */}
        <div style={{ marginTop: "15px" }}>
          <Link
            to="/signin"
            style={{
              textDecoration: "none",
              color: "#FF714A",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            &#8592; Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
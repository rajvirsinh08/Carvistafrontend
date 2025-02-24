import React from "react";
import  fp from '../Assets/Images/fp.png'
import { Link } from "react-router-dom";
const ForgotPassword = () => {
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
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <img
          src={fp}
          alt="Forgot Password"
          style={{ width: "80px",height:'80px', marginBottom: "15px"}}
        />
        </div>

        {/* Title */}
        <h2 style={{ margin: 0, fontFamily: "Arial, sans-serif", color: "#333" }}>
          Forgot your password?
        </h2>
        <p style={{ color: "#777", fontSize: "14px", marginTop: "5px" }}>
          Enter your email so that we can send you a password reset link
        </p>

        {/* Email Input */}
        <div style={{ textAlign: "left", marginTop: "15px" }}>
          <label style={{ fontSize: "14px", fontWeight: "bold", color: "#333" }}>
            Email
          </label>
          <input
            type="email"
            placeholder="e.g. username@kinety.com"
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
        </div>

        {/* Send Email Button */}
        <Link to='/resetpassword'>
        <button 
          style={{
            width: "100%",
            padding: "12px",
            background: "#FF714A",
            color: "white",
            border: "none",
            borderRadius: "20px",
            fontSize: "16px",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          Send Email
        </button>
        </Link>
        {/* Back to Login */}
        <div style={{ marginTop: "15px" }}>
          <a
            href="/signin"
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

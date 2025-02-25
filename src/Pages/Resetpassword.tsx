import React, { useState, ChangeEvent } from "react";
import resetpassword from "../Assets/Images/resetpassword.png";
import {Link} from 'react-router-dom'

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

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
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "20px",
          width: "400px",
          textAlign: "center",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        {/* Icon */}
        <div
          style={{
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={resetpassword} alt="Reset Password" style={{ width: "100px" }} />
        </div>

        {/* Title */}
        <h2 style={{ margin: "0", fontSize: "22px", color: "#333" }}>Reset Password</h2>
        <p style={{ fontSize: "14px", color: "#777" }}>Please kindly set your new password.</p>

        {/* New Password Input */}
        <div style={{ textAlign: "left", marginBottom: "10px" }}>
          <label style={{ fontSize: "14px", color: "#333" }}>New password</label>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #ccc",
              borderRadius: "25px",
              padding: "10px",
              marginTop: "5px",
            }}
          >
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter new password"
              style={{
                border: "none",
                outline: "none",
                flex: "1",
                fontSize: "14px",
              }}
            />
          </div>
        </div>

        {/* Re-enter Password */}
        <div style={{ textAlign: "left", marginBottom: "20px" }}>
          <label style={{ fontSize: "14px", color: "#333" }}>Re-enter password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
            placeholder="Re-enter new password"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "25px",
              border: "1px solid #ccc",
              fontSize: "14px",
              marginTop: "5px",
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          style={{
            width: "100%",
            padding: "12px",
            background: "#EF6E0B",
            color: "white",
            fontSize: "16px",
            borderRadius: "25px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send Email
        </button>

        {/* Back to Login */}
        <Link to='/signin'>
               <div
          style={{
            marginTop: "15px",
            fontSize: "14px",
            color: "#777",
            cursor: "pointer",
          }}
        >
          ← Back to Login
        </div>
        </Link>
 
      </div>
    </div>
  );
};

export default ResetPassword;

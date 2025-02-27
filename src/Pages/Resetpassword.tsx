import React, { useState, ChangeEvent } from "react";
import resetpassword from "../Assets/Images/resetpassword.png";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import { useNavigate } from "react-router-dom";
const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false); // State to toggle visibility
  const navigate = useNavigate(); // Initialize navigation hook
  const validatePassword = (pwd: string): boolean => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pwd);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (!validatePassword(newPassword)) {
      setError("Password must be at least 8 characters long, include a number & special character.");
    } else {
      setError("");
    }
  };
  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const handleSubmit = async () => {
    if (!validatePassword(password)) {
      setError("Invalid password format.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    const email = localStorage.getItem("resetEmail"); // Retrieve email from localStorage
    const otp = localStorage.getItem("verifiedOTP"); // Store OTP in localStorage after verification (optional)
    if (!email) {
      setError("No email found. Please request OTP again.");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/user/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp, newPassword: password }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to reset password");
      }
      alert("Password Reset Successfully!");
      localStorage.removeItem("resetEmail"); // Clear stored email after reset
      localStorage.removeItem("verifiedOTP"); // Clear OTP (if used)
      navigate("/signin"); // Redirect to login page
    } catch (error: any) {
      setError(error.message);
    }
  };
  // const handleSubmit = () => {
  //   if (!validatePassword(password)) {
  //     setError("Invalid password format.");
  //     return;
  //   }
  //   if (password !== confirmPassword) {
  //     setError("Passwords do not match.");
  //     return;
  //   }
  //   alert("Password Reset Successfully!");
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
              position: "relative",
            }}
          >
            <input
              type={showPassword ? "text" : "password"}
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
            <button
              type="button"
              onClick={togglePasswordVisibility}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                position: "absolute",
                right: "10px",
              }}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>
        </div>
        {/* Re-enter Password */}
        <div style={{ textAlign: "left", marginBottom: "10px" }}>
          <label style={{ fontSize: "14px", color: "#333" }}>Re-enter password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
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
        {/* Error Message */}
        {error && <p style={{ color: "red", fontSize: "12px", marginBottom: "10px" }}>{error}</p>}
        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={!password || !confirmPassword || password !== confirmPassword || !!error}
          style={{
            width: "100%",
            padding: "12px",
            background: !password || !confirmPassword || password !== confirmPassword || !!error ? "#ccc" : "#EF6E0B",
            color: "white",
            fontSize: "16px",
            borderRadius: "25px",
            border: "none",
            cursor: !password || !confirmPassword || password !== confirmPassword || !!error ? "not-allowed" : "pointer",
          }}
        >
          Reset Password
        </button>
        {/* Back to Login */}
        <Link to="/signin">
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







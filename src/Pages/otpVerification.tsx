import React, { useState, ChangeEvent, KeyboardEvent, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import otpimg from "../Assets/Images/otp.jpg";
const OTPVerification: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();
  const emailFromState = location.state?.email;
  useEffect(() => {
    if (emailFromState) {
      localStorage.setItem("resetEmail", emailFromState); // Store email if passed from state
    }
  }, [emailFromState]);
  const email = localStorage.getItem("resetEmail"); // Retrieve email from localStorage
  if (!email) {
    return <p>Error: No email provided. Please request OTP again.</p>;
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    if (!/^[0-9]?$/.test(e.target.value)) return;
    let newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
    if (e.target.nextElementSibling && e.target.value) {
      (e.target.nextElementSibling as HTMLInputElement).focus();
    }
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      let newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      (e.currentTarget.previousElementSibling as HTMLInputElement)?.focus();
    }
  };
  const handleSubmit = async () => {
    if (otp.includes("")) {
      setError("Please enter a complete 6-digit OTP.");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/user/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: otp.join("") }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to verify OTP");
      }
      localStorage.setItem("verifiedOTP", otp.join(""));
      alert("OTP Verified Successfully!");
      navigate("/resetpassword");
    } catch (error: any) {
      setError(error.message);
    }
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
          background: "white",
          padding: "40px",
          borderRadius: "10px",
          width: "350px",
          textAlign: "center",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ marginBottom: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={otpimg} alt="OTP Verification" style={{ width: "80px", height: "80px" }} />
        </div>
        <h2 style={{ margin: 0, color: "#333" }}>OTP Verification</h2>
        <p style={{ color: "#777", fontSize: "14px", marginTop: "5px" }}>
          One Time Password (OTP) has been sent via Email.
        </p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={data}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              style={{
                width: "40px",
                height: "40px",
                margin: "5px",
                textAlign: "center",
                fontSize: "18px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                outline: "none",
              }}
            />
          ))}
        </div>
        {error && <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>{error}</p>}
        <button
          onClick={handleSubmit}
          disabled={otp.includes("")}
          style={{
            width: "100%",
            padding: "12px",
            background: otp.includes("") ? "#ccc" : "#333",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            marginTop: "20px",
            cursor: otp.includes("") ? "not-allowed" : "pointer",
          }}
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};
export default OTPVerification;










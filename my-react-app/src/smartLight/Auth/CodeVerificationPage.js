import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CodeVerificationPage = () => {
  const [tempPassword, setTempPassword] = useState("");
  const location = useLocation();
  const { email } = location.state || {};
  const navigate = useNavigate();

  const handleVerifyCode = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/login-with-temp-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, tempPassword }),
      });
      if (response.ok) {
        alert("Login successful!");
        navigate(`/`);
      } else {
        alert("Invalid or expired temporary password.");
      }
    } catch (error) {
      alert(`Error occurred.${error}`);
    }
  };

  return (
    <div>
      <h1>Verify Temporary Password</h1>
      <input
        type="text"
        placeholder="Enter your temporary password"
        value={tempPassword}
        onChange={(e) => setTempPassword(e.target.value)}
      />
      <button onClick={handleVerifyCode}>Verify</button>
    </div>
  );
};

export default CodeVerificationPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmailInputPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSendCode = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/send-temp-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        alert("Temporary password sent to your email.");
        navigate("/verify-code", { state: { email } });
      } else {
        alert("Error sending temporary password.");
      }
    } catch (error) {
      alert("Error occurred.");
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSendCode}>Send Temporary Password</button>
      
    </div>

  );
};

export default EmailInputPage;


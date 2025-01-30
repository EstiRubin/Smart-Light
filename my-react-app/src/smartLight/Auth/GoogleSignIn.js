import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const GoogleSignIn = ({ onSuccess }) => {
  const handleGoogleLogin = (token) => {
    fetch("http://localhost:3000/api/auth/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Google login success:", data);
        onSuccess(data); // עדכון ההצלחה לאחר קבלת הנתונים
      })
      .catch((error) => {
        console.error("Google login failed:", error);
        alert("Google login failed.");
      });
  };

  const handleError = () => {
    console.error("Google Sign-In failed");
    alert("Google Sign-In failed. Please try again.");
  };

  return (
    <GoogleOAuthProvider clientId="98326602501-5h78tu67tq11dpa7nfbkqeiecfululmt.apps.googleusercontent.com">
      <div>
        <h2>Sign In with Google</h2>
        <GoogleLogin
          onSuccess={(response) => handleGoogleLogin(response.credential)}
          onError={handleError}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleSignIn;

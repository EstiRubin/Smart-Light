import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const GoogleSignIn = ({ onSuccess }) => {
  const handleSuccess = (response) => {
    console.log("Google Response:", response);
    onSuccess(response.credential); // Send the token to your backend
  };

  const handleError = () => {
    console.error("Google Sign-In failed");
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div>
        <h2>Sign In with Google</h2>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          useOneTap
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleSignIn;

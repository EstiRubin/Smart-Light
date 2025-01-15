import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { sendVerificationCode } from "../api/api";
import EmailInput from "../componnet/EmailInput";
import { sendVerificationCode } from "../api/api";
// import EmailInput from "../components/EmailInput";
import GoogleSignIn from "../componnet/GoogleSignIn";
import App from "../../../App";
const EmailInputPage = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSendCode = async () => {
        try {
            await sendVerificationCode(email);
            alert("Verification code sent to your email");
            navigate("/verify-code", { state: { email } });
           // <App></App>
        } catch (error) {
            alert("Error sending verification code");
        }
    };
    const handleSuccess = (token) => {
        // Send the token to your backend for verification
        alert("Google Sign-In Successful!");
        console.log("Google Token:", token);
      };

    return  <>
    <h1>Google Sign-In</h1>
    <GoogleSignIn onSuccess={handleSuccess} />
    <EmailInput email={email} setEmail={setEmail} onSubmit={handleSendCode} />
    </>;
};

export default EmailInputPage;

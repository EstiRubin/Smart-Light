import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { sendVerificationCode } from "../api/api";
import EmailInput from "../componnet/EmailInput";
import { sendVerificationCode } from "../api/api";
// import EmailInput from "../components/EmailInput";

const EmailInputPage = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSendCode = async () => {
        try {
            await sendVerificationCode(email);
            alert("Verification code sent to your email");
            navigate("/verify-code", { state: { email } });
        } catch (error) {
            alert("Error sending verification code");
        }
    };

    return <EmailInput email={email} setEmail={setEmail} onSubmit={handleSendCode} />;
};

export default EmailInputPage;

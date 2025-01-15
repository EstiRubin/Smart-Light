import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyCode } from "../api/api";
import CodeVerification from "../componnet/CodeVerification";
// import CodeVerification from "../components/CodeVerification";

const CodeVerificationPage = () => {
    const [code, setCode] = useState("");
    const location = useLocation();
    const { email } = location.state || {};
    const navigate = useNavigate();

    const handleVerifyCode = async () => {
        try {
            const response = await verifyCode(email, code);
            alert(response.data);
            navigate("/About");

        } catch (error) {
            alert("Invalid or expired code");

        }
    };

    return <CodeVerification code={code} setCode={setCode} onSubmit={handleVerifyCode} />;
};

export default CodeVerificationPage;

import React from "react";

const CodeVerification = ({ code, setCode, onSubmit }) => {
    return (
        <div style={{ padding: "20px" }}>
            <h3>Enter Verification Code</h3>
            <input
                type="text"
                placeholder="Enter the code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                style={{ marginRight: "10px" }}
            />
            <button onClick={onSubmit}>Verify Code</button>
        </div>
    );
};

export default CodeVerification;

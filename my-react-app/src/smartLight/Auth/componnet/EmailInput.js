import React from "react";

const EmailInput = ({ email, setEmail, onSubmit }) => {
    return (
        <div style={{ padding: "20px" }}>
            <h3>Sign In</h3>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ marginRight: "10px" }}
            />
            <button onClick={onSubmit}>Send Code</button>
        </div>
    );
};

export default EmailInput;

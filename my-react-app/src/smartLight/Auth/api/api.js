import axios from "axios";

const API_URL = "http://localhost:3001/api";

export const sendVerificationCode = async (email) => {
    return axios.post(`${API_URL}/send-code`, { email });
};

export const verifyCode = async (email, code) => {
    return axios.post(`${API_URL}/verify-code`, { email, code });
};

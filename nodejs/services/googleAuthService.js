import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const verifyToken = async (token) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  return ticket.getPayload();
};

export const findOrCreateUser = async (profile) => {
  // Simulate user logic, replace with database logic
  const user = {
    googleId: profile.id,
    name: profile.displayName,
    email: profile.emails[0].value,
  };
  return user;
};

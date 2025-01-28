import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  googleId: { type: String },
  tempPassword: { type: String },
  tempPasswordExpires: { type: Date },
  verificationCode: { type: String },
  codeExpiration: { type: Date },
});

export default mongoose.model('users', userSchema);


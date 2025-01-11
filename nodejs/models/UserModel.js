import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    verificationCode: String,
    codeExpiration: Date,
}, { versionKey: false });

const User = mongoose.model('users', UserSchema);

export default User;

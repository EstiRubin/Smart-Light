import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: Number,
    firstName: String,
    lastName: String,
    phone: String,
    password: String,
    role: String,
    email: String,
    tokens: {
        type: Object, // Store access token, refresh token, and expiry info
        default: null,
    },
});

const User = mongoose.model('users', UserSchema);

export default User;
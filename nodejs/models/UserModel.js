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
});

const User = mongoose.model('users', UserSchema);

export default User;
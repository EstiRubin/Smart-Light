import BaseRepo from "./BaseRepo.js";
import User from '../models/UserModel.js'
class UserRepo extends BaseRepo {
    constructor() {
        super(User);
    }

    // Save OAuth tokens for a user
    async saveTokens(userId, tokens) {
        try {
            const user = await User.findById(userId);
            if (!user) throw new Error("User not found");
            user.tokens = tokens; // Assuming `tokens` field exists in your User schema
            await user.save();
            return user;
        } catch (error) {
            console.error("Error saving tokens:", error);
            throw error;
        }
    }

    // Retrieve OAuth tokens for a user
    async getTokens(userId) {
        try {
            const user = await User.findById(userId);
            if (!user) throw new Error("User not found");
            return user.tokens;
        } catch (error) {
            console.error("Error retrieving tokens:", error);
            throw error;
        }
    }
}

export default new UserRepo();

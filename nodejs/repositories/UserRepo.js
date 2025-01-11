import BaseRepo from "./BaseRepo.js";
import User from '../models/UserModel.js'
class UserRepo extends BaseRepo {
    constructor(model) {
        super(User);
    }
}

export default new UserRepo(User);
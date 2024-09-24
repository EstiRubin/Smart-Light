import UserRepo from "../repositories/UserRepo.js";
import BaseService from "./BaseService.js";

class UserService extends BaseService {
    constructor(repo) {
        super(repo);
    }
}

export default new UserService(UserRepo);
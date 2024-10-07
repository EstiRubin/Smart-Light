import UserService from "../services/UserService.js";
import BaseController from "./BaseController.js";

class UserController extends BaseController {
    constructor(service) {
        super(service);
        this.type = "user";
    }
}

export default new UserController(UserService);
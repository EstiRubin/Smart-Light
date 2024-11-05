import CategoryRepo from "../repositories/CategoryRepo.js";
import BaseService from "./BaseService.js";

class CategoryService extends BaseService {
    constructor(repo) {
        super(repo);
    }

}
export default new CategoryService(CategoryRepo);
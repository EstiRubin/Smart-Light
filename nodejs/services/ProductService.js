import repo from "../repositories/ProductRepo.js";
import BaseService from "./BaseService.js";

class ProductService extends BaseService {
    constructor(repo) {
        super(repo);
    } 
}
export default new ProductService(repo);




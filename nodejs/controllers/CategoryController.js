import BaseController from "./BaseController.js";
import service from '../services/CategoryService.js';

class CategoryController extends BaseController{
    constructor(service){
        super(service);
        this.type = 'category';
    }

}

export default new CategoryController(service);
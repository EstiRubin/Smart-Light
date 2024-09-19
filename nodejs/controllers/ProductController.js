import BaseController from "./BaseController.js";
import service from "../services/ProductService.js"

class ProductController extends BaseController {
    constructor(service) {
        super(service);  
        this.type = "product";      
    }
}
export default new ProductController(service);


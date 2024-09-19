import BaseController from "./BaseController.js";
import service from '../services/CategoryService.js';

class CategoryController extends BaseController{
    constructor(service){
        super(service);
        this.type = 'category';
    }

    // async add (req, res, next){
    //     try {
    //         const response = await this.service.addCategory(req.body);
    //         return res.status(200).json(response);
    //     }
    //     catch (e) {
    //         next(e);
    //     }
    // }

    // async update (req, res, next){
    //     const { id } = req.params;
    //     try {
    //         const response = await this.service.update(id, req.body);
    //         return res.status(200).json(response);
    //     }
    //     catch (e) {
    //         next(e);
    //     }
    // }
}

export default new CategoryController(service);
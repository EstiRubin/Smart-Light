// import connect from "./db.js";
import BaseRepo from './BaseRepo.js';
import Category from '../models/CategoryModel.js';

class CategoryRepo extends BaseRepo {
    constructor(model) {
        // this.model = model;
        // connect();
        super(Category);
    }

}

export default new CategoryRepo(Category);
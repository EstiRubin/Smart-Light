// import connect from './db.js';
import BaseRepo from '../repositories/BaseRepo.js';
import Product from '../models/ProductModel.js';

class ProductRepo extends BaseRepo {
    constructor(model) {
        // this.model = model;
        // connect();
        super(Product);
    }

    async getProductsByCategoryId  (categoryId) {
        return await Product.find({ categoryID: categoryId });
      };

}
export default new ProductRepo(Product);
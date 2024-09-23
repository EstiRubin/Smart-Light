// import connect from './db.js';
import BaseRepo from '../repositories/BaseRepo.js';
import Product from '../models/ProductModel.js';

class ProductRepo extends BaseRepo {
    constructor(model) {
        // this.model = model;
        // connect();
        super(Product);
    }
    // async getAll() {
    //     let l = await this.model.find({}).exec();
    //     console.log(l);
    //     return l;
    // }

    // async getById(id) {
    //     try {
    //         let product = await this.model.findById(id);
    //         return product;
    //     }
    //     catch (errors) {
    //         console.log(errors.message);
    //         throw new Error('Something wrong happened');
    //     }
    // }

}
export default new ProductRepo(Product);
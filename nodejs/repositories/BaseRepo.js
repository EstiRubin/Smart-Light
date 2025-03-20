 import connect from './db.js';

class BaseRepo {
    constructor(model) {
        this.model = model;
        connect();
    }
    async getAll() {
        try{
            return await this.model.find({}).exec();
        }
        catch(error){
            throw new Error('Something went wrong');
        }
    }

    async getById(id) {
        try {
            let product = await this.model.findById(id);
            if(!product){
                let error = new Error('Product not found');
                error.statusCode = 404;
                throw error;
            } else {
                return product;
            }
        }
        catch (errors) {
            throw new Error('Something went wrong');
        }
    }

    async add(data) {
        try {
            let product = await this.model.create(data);
            if (!product) {
                throw new Error('Something went wrong');
            } else {
                return product;
            }
        } catch (error) {
            throw error;
        }
    }

    async update(id, data) {
        try {
            let product = await this.model.findByIdAndUpdate(id, data, { new: true });
            if (!product) {
                let error = new Error('product not found');
                error.statusCode = 404;
                throw error;
            } else {
                return product;
            }
        } catch (errors) {
            throw errors;
        }
    }

    async delete(id) {
        try {
            let product = await this.model.findByIdAndDelete(id);
            if (!product) {
                let error = new Error('product not found');
                error.statusCode = 404;
                throw error;
            } else {
                return product;
            }
        } catch (errors) {
            throw errors;
        }
    }
}

export default  BaseRepo;
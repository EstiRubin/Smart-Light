import connect from "./db";
import categories from '../models/CategoryModel';

class CategoryRepo {
    constructor(model) {
        this.model = model;
        connect();
    }

    async getAll () {
        try {
            let categories = await this.model;
            return categories;
        }
        catch (error) {
            console.log(error.message);
            throw new Error("An error occurred while retrieving categories. Please try again later.");
        }
    }

    async getById (id) {
        try {
            if (!id) {
                throw new Error("Invalid category ID.");
            }
            let category = await this.getById(id);
            return category;
        }
        catch (error) {
            console.log(error.message);
            throw new Error("An error occurred while retrieving category. Please try again later.");
        }        
    }

    async add (category) {
        try {
            if (!category) {
                throw new Error("Invalid category data.");
            }
            return await this.model.create(category);
        }
        catch (error) {
            console.log(error.message);
            throw new Error("An error occurred while adding a new category. Please try again later.");
        }
    }
    
    async update (id, category) {
        try {
            if (!id ||!category) {
                throw new Error("Invalid category ID or data.");
            }
            return await this.model.findByIdAndUpdate(id, category, {new: true});
        }
        catch (error) {
            console.log(error.message);
            throw new Error("An error occurred while updating category. Please try again later.");
        }
    }
    
    async delete (id) {
        try {
            if (!id) {
                throw new Error("Invalid category ID.");
            }
            return await this.model.findByIdAndDelete(id);
        }
        catch (error) {
            console.log(error.message);
            throw new Error("An error occurred while deleting category. Please try again later.");
        }
    }
}

export default new CategoryRepo(categories);
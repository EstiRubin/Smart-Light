class BaseService {
  constructor(repo) {
    this.repo = repo;
  }

    async getAll() {
        try {
        return await this.repo.getAll();
        } catch (errors) {
        console.log(errors);
        throw new Error("Something went wrong");
        }
    }

    async getById(id) {
        try {
            let product = await this.repo.getById(id);
            if (!product) {
                let error = new Error("Product not found");
                error.statusCode = 404;
                throw error;
            } else {
                return product;
            }
        } catch (errors) {
            console.log(errors);
            throw new Error("Something went wrong");
        }
    }

    async add(data) {
        try {
            return await this.repo.add(data);
        } catch (errors) {
            console.log(errors);
            console.log(req.body);
            throw new Error("Something went wrong.");
        }
    }
    
    async update(id, data) {
        try {
            let product = await this.repo.update(id, data, { new: true });
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
            let product = await this.repo.delete(id);
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
export default BaseService;

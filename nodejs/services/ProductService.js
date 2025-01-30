import repo from "../repositories/ProductRepo.js";
import BaseService from "./BaseService.js";
import Category from "../models/CategoryModel.js";  // <-- Add this import
import Product from "../models/ProductModel.js";
class ProductService extends BaseService {
  constructor(repo) {
    super(repo);
  }

  async getProductsByCategory(categoryName) {
    try {
      // Find the category by its name
      const category = await Category.findOne({ categoryName });
      
      if (!category) {
        throw new Error("Category not found");
      }

      // Fetch products related to the category ID
      const products = await Product.find({ categoryID: category._id });
      
      return products;
    } catch (error) {
      console.error(error);
      throw new Error("Error fetching products by category");
    }
  }
}

export default new ProductService(repo);

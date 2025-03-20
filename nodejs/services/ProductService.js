import repo from "../repositories/ProductRepo.js";
import BaseService from "./BaseService.js";
import Category from "../models/CategoryModel.js";  // <-- Add this import
import Product from "../models/ProductModel.js";
import mongoose from "mongoose"
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

      const products = await Product.find({ categoryID: category._id });
      
      return products;
    } catch (error) {
      console.error(error);
      throw new Error("Error fetching products by category");
    }
  }
  
  async getProductsByname(Name) {
    try {
      const isObjectId = !isNaN(Name) && !isNaN(parseFloat(Name));
  
      const query = [
        { nameOfProduct: { $regex: Name, $options: 'i' } }
      ];
  
      if (isObjectId) {
        query.push({ _id: !isNaN(Name) && !isNaN(parseFloat(Name)) });
      }
  
  
      const products = await Product.find({ $or: query });
      
      return products;
    } catch (error) {
      console.error(error);
      throw new Error("Error fetching products by name");
    }
  }
async getSimilarProducts(productId) {
  const product = await Product.findById(productId);
  if (!product) throw new Error("Product not found");

  const similarProducts = await Product.aggregate([
      { $match: {
          _id: { $ne: product._id } // לא לכלול את המוצר עצמו
      }},
      { $addFields: {
          matchingTagsCount: {
              $size: { $setIntersection: ["$tags", product.tags] } } // חישוב מספר התגיות המשותפות
      }},
      { $match: { matchingTagsCount: { $gt: 0 } } }, // מסנן מוצרים שאין להם אף תגית משותפת
      { $sort: { matchingTagsCount: -1 } }, // מיון לפי כמות תגיות משותפות (הכי הרבה ראשון)
      { $limit: 5 } // מחזיר רק 5 תוצאות
  ]);

  return similarProducts;
};

  
}

export default new ProductService(repo);

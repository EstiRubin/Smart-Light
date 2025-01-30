import BaseController from "./BaseController.js";
import service from "../services/ProductService.js"; // Make sure this is the correct import

class ProductController extends BaseController {
  constructor(service) {
    super(service);  
    this.type = "product";      
  }

  async getProductsByCategory(req, res) {
    const { category } = req.params;  // Expecting category in the URL

    try {
      // Call the service method to get products by category
      const products = await this.service.getProductsByCategory(category); // Use the service to fetch products
      
      if (!products || products.length === 0) {
        return res.status(404).json({ message: "No products found for this category." });
      }
      
      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  }
}

export default new ProductController(service);

import BaseService from "./BaseService.js";
import CartRepo from "../repositories/CartRepo.js";
import Product from "../models/ProductModel.js";
import EmailService from './EmailService.js';

class CartService extends BaseService {
    constructor(repo) {
        super(repo);
    }

    async addItemToCart(cartId, productId, quantity, customization) {
        try {
            const product = await Product.findById(productId);
            if (!product) {
                throw new Error("Product not found");
            }

            const cart = await this.repo.addItemToCart(cartId, productId, quantity, customization);
         // cart.totalPrice = await this.calculateTotalPrice(cart.items);
            await cart.save();
            return cart;
        } catch (error) {
            console.error('Error in addItemToCart service:', error);
            throw new Error("Error adding item to cart");
        }
    }

    async deleteItemFromCart(cartId, productId) {
        try {
            const cart = await this.repo.deleteItemFromCart(cartId, productId);    
            if (!cart) {
                throw new Error("Cart not found or item not deleted");
            }
            await cart.save();   
            return cart;
        } catch (error) {
            console.error('Error in deleteItemFromCart service:', error);
            throw new Error("Error deleting item from cart");
        }
    }
    
    

    async updateItemQuantity(cartId, productId, newQuantity) {
        try {
            const cart = await this.repo.updateItemQuantity(cartId, productId, newQuantity);
         // cart.totalPrice = await this.calculateTotalPrice(cart.items);
            await cart.save();
            return cart;
        } catch (error) {
            console.error('Error in updateItemQuantity service:', error);
            throw new Error("Error updating item quantity");
        }
    }

    async sendCartToEmail(cartId, userEmail) {
        try {
            console.log(this.repo);
            const cart = await this.repo.getById(cartId);
            await EmailService.sendCartToEmail(cart, userEmail);
        } catch (error) {
            console.error("Error in sendCartToEmail service:", error);
            throw new Error("Error sending cart to email");
        }
    }
    

        // async calculateTotalPrice(items) {
    //     const prices = await Promise.all(
    //         items.map(async item => {
    //             const product = await Product.findById(item.productId);
    //             return product ? product.price * item.quantity : 0;
    //         })
    //     );
    //     return prices.reduce((total, price) => total + price, 0);
    // }
    

    // async calculateTotalPriceWithoutDetails(cartId) {
    //     const cart = await this.cartRepo.getById(cartId);
    //     return await this.calculateTotalPrice(cart.items);
    // }
}

export default new CartService(CartRepo);




import BaseRepo from "../repositories/BaseRepo.js";
import Cart from "../models/CartModel.js";
import nodemailer from 'nodemailer';


class CartRepo extends BaseRepo {
    constructor(model) {
        super(Cart);
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true, // TLS
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
    }
    async getAll() {
        try {
            return await Cart.find({});
        } catch (error) {
            console.error(error);
            throw new Error("Error retrieving all carts");
        }
    }
    async getById(id) {
        try {
            const cart = await Cart.findById(id);
            if (!cart) {
                throw new Error("Cart not found");
            }
            return cart;
        } catch (error) {
            console.error(error);
            throw new Error("Error retrieving cart");
        }
    }

    async addItemToCart(cartId, productId, quantity, customization) {
        try {
            const cart = await Cart.findById(cartId);
            if (!cart) {
                throw new Error('Cart not found');
            }

            const existingItem = cart.items.find(item => item.productId === productId);

            if (existingItem) {
                existingItem.quantity += quantity;  
            } else {
                cart.items.push({ productId, quantity, customization });
            }

            await cart.save();
            return cart;
        } catch (error) {
            console.error('Error adding item to cart:', error);
            throw new Error("Error adding item to cart");
        }
    }

    async updateItemQuantity(cartId, productId, newQuantity) {
        try {
            const cart = await Cart.findById(cartId);
            if (!cart) {
                throw new Error("Cart not found");
            }

            const item = cart.items.find(item => item.productId === productId);
            if (!item) {
                throw new Error("Item not found in cart");
            }

            item.quantity = newQuantity;  
            await cart.save();
            return cart;
        } catch (error) {
            console.error('Error updating item quantity:', error);
            throw new Error("Error updating item quantity");
        }
    }

    async deleteItemFromCart(cartId, productId) {
        try {
            const cart = await Cart.findById(cartId);
            if (!cart) {
                throw new Error('Cart not found');
            }

            const itemIndex = cart.items.findIndex(item => item.productId === productId);
            if (itemIndex === -1) {
                throw new Error('Item not found in cart');
            }

            cart.items.splice(itemIndex, 1);  
            await cart.save();
            return cart;
        } catch (error) {
            console.error('Error deleting item from cart:', error);
            throw new Error("Error deleting item from cart");
        }
    }

    async sendMail(mailOptions) {
        try {
            await this.transporter.sendMail(mailOptions);
            console.log("Email sent successfully");
        } catch (error) {
            console.error("Error sending email:", error);
            throw new Error("Failed to send email");
        }
    }
}

export default new CartRepo(Cart);
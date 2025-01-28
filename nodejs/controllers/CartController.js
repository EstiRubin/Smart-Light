import BaseController from "./BaseController.js";
import service from "../services/CartService.js"

class CartController extends BaseController {
    constructor(service) {
        super(service);  
        this.type = "cart";      
    }
    

    async addItem(req, res, next) {
        const { cartId, productId, quantity, customization } = req.body;
        try {
            const response = await this.service.addItemToCart(cartId, productId, quantity, customization);
            return res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    async deleteItem(req, res, next) {
        const { cartId, productId } = req.body;
        try {
            const response = await this.service.deleteItemFromCart(cartId, productId);
            return res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }    

    async updateItem(req, res, next) {
        const { cartId, productId, newQuantity } = req.body;
        try {
            const response = await this.service.updateItemQuantity(cartId, productId, newQuantity);
            return res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }
    

    async sendCartToEmailInController(req, res, next) {
        const { cartId, email } = req.body;
        try {
            await this.service.sendCartToEmail(cartId, email);
            return res.status(200).json({ message: "Cart sent successfully" });
        } catch (error) {
            next(error);
        }
    }
}
export default new CartController(service);

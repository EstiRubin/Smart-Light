import mongoose  from "mongoose";

const Schema = mongoose.Schema

const CartSchema = new Schema ({
    _id: Number,
    // userId: Number,
    items: [
        {
            productId: Number,
            quantity: Number,
            customization: {
                color: String,        
                lightColor: String,    
                watt: String,         
                otherOptions: String   
            }           
        }
    ],
}, {versionKey: false}, {timestamps: true});

const Cart = mongoose.model('carts', CartSchema);

export default Cart;
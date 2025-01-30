import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    _id: Number,
    nameOfProduct : String, 
    price : [Number],
    watt : [String],
    images : [String],
    colors : [String],
    lightColors : [String],
    categoryID : [Number],
    IP: Number,
    DIM: String,
    beamAngle: String,
    tags: [String]
}, {versionKey: false});
const Product = mongoose.model('products', ProductSchema);

export default Product;
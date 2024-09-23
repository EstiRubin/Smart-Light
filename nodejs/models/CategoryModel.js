import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    _id: Number,
    categoryName: String
}, {versionKey: false});

const Category = mongoose.model('categories', CategorySchema);

export default Category;
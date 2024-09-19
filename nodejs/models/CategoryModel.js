import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    _id: Number,
    categoryName: String
});

const Category = mongoose.model('categories', CategorySchema);

export default Category;
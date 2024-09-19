import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
    _id: Number,
    categoryName: String
}, { versionKey: false });

const categoriesModel = mongoose.model('categories', categoriesSchema, 'categories');

export default categoriesModel;
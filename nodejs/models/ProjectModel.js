import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    _id: Number,
    nameOfProject: String,
    architect: String,
    projectCreationDate: String,
    images: Array,
    combinedProducts: Array,
});
const ProjectModel = mongoose.model('Project', ProjectSchema);

export default ProjectModel;
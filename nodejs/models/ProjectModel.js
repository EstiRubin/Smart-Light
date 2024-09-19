import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    _id: Number,
    locationCode: Number,
    description: String,
    phone: String,
    statusCode: Number,
    numOfPeopleStuck: Number,
    priorityCode: Number,
    volenteerCode: String
}, { versionKey: false });
/*, 'helpRequest'*/
const ProjectModel = mongoose.model('helpProjects', ProjectSchema, 'helpProjects');

export default ProjectModel;
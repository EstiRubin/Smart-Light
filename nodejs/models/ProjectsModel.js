import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProjectsSchema = new Schema({
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
const ProjectsModel = mongoose.model('helpProjects', ProjectsSchema, 'helpProjects');

export default ProjectsModel;
// import connect from './db.js';
import Projects from '../models/ProjectModel.js';
import buildPipeline from '../files/Pipline.js';
 import { byParams, byId } from '../files/Filters.js';
import BaseRepo from './BaseRepo.js';

class ProjectRepo extends BaseRepo{
    constructor(model) {
        // this.model = model;
        // connect();
        super(Projects);
    }

    // async getAll() {
    //     const pipeline = buildPipeline();
    //     const aggregationResult = await this.model.aggregate(pipeline).exec();
    //     return aggregationResult;
    //     // return await this.model.aggregate().exec();
    // }

    // async getById(id) {
    //     try {
    //         for (const i in pipline) {
    //             pipline.slice(0, pipline.length, i);
    //         }
    //         // const sPipe = byId(id);
    //         const pipline = buildPipeline();
    //         let req = await this.model.aggregate(pipline).byId().exec();
    //         // req = req.byId(id);
    //         if (!req) {
    //             let error = new Error('req is not found');
    //             error.statusCode = 404;
    //             throw error;
    //         }

    //         return req;
    //     }
    //     catch (errors) {
    //         console.log(errors.message);
    //         throw new Error('An error occurred while retrieving the Projects. Please try again later');
    //     }
    // }
    // // async getById(id) {
    // //     try {
    // //         const sPipe = byId(id);
    // //         const pipline = buildPipeline(sPipe);
    // //         let req = await this.model.aggregate(pipline).exec();
    // //         if (!req) {
    // //             let error = new Error('req is not found');
    // //             error.statusCode = 404;
    // //             throw error;
    // //         }

    // //         return req;
    // //     }
    // //     catch (errors) {
    // //         console.log(errors.message);
    // //         throw new Error('An error occurred while retrieving the Projects. Please try again later');
    // //     }
    // // }

    // // async update(id, data) {
    // //     try {
    // //         let req = await this.model.findByIdAndUpdate( { _id: id }, 
    // //             { 
    // //                 statusCode: 2, 
    // //                 volenteerCode: data.id 
    // //             } );
    // //         return req;
    // //     }
    // //     catch (errors) {
    // //         console.log(errors.message);
    // //         throw new Error("An error occurred while trying to update the Projects's status. Please try again later.");
    // //     }
    // // }

 }
export default new ProjectRepo(Projects);
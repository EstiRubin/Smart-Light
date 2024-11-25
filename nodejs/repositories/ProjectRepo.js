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
    async getAll() {
        try {
            return await this.model.aggregate([
                {
                    $lookup: {
                        from: 'products', // שם קולקציית המוצרים
                        let: { combinedProductsArray: "$combinedProducts" }, // המערך עם מזהי המוצרים
                        pipeline: [
                            {
                                $match: {
                                    $expr: { $in: ["$_id", "$$combinedProductsArray"] } // חיפוש המסמכים לפי מזהים ב-combinedProducts
                                }
                            }
                        ],
                        as: 'combinedProducts' // החלפת המערך במידע המלא מ-products
                    }
                }
                
                // {
                //     $lookup: {
                //         from: 'products', // השם של קולקציית המוצרים
                //         let: { combinedProductsArray: "$combinedProducts" }, // מערך ה-IDs מהמוצרים
                //         pipeline: [
                //             {
                //                 $match: {
                //                     $expr: { $in: ["$_id", "$$combinedProductsArray"] } // חיפוש לפי IDs במערך
                //                 }
                //             }
                //         ],
                //         as: 'productDetails' // המידע המשויך יופיע תחת 'productDetails'
                //     },
                    
                // },
                // // {
                //         // '$project': {
                //         //     '_id': 0,
                //         //     // 'combinedProducts': 0,
                //         //     // 'architect': 0,
                //         //     // 'projectCreationDate': 0,
                //         //     // 'imags': 0,
                //         //     // 'productDetails': 0,
                //         // }
                //     // }

            ]).exec();
        } catch (error) {
            console.log(error.message);
            throw new Error('Something went wrong while fetching all projects');
        }
    }


    

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
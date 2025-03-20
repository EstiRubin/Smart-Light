import Projects from '../models/ProjectModel.js';
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

            ]).exec();
        } catch (error) {
            throw new Error('Something went wrong while fetching all projects');
        }
    }

    async getById(id) {
        try {
            return await this.model.aggregate([
                {
                    $match: { _id: Number(id) } // המרת id למספר כדי לוודא התאמה
                },
                {
                    $lookup: {
                        from: 'products', // שם הקולקציה של המוצרים
                        let: { combinedProductsArray: "$combinedProducts" }, // מזהי המוצרים
                        pipeline: [
                            {
                                $match: {
                                    $expr: { $in: ["$_id", "$$combinedProductsArray"] } // בדיקה אם _id נמצא בתוך המערך
                                }
                            }
                        ],
                        as: 'combinedProducts' // שמירת התוצאה בשם הזה
                    }
                }
            ]).exec();
        } catch (error) {
            throw new Error('Something went wrong while fetching the project');
        }
    }
    
        
    
    

 }
export default new ProjectRepo(Projects);
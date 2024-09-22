import repo from '../repositories/ProjectRepo.js';
import BaseService from './BaseService.js';

class ProjectService extends BaseService{
    constructor(repo){
        super(repo);
    }

    // async update(id, data){
    //     try{
    //         return await this.repo.update(id, data);
    //     }
    //     catch(errors){
    //         console.log(errors);
    //         throw new Error("unable to update Projects.");
    //     }
    // }
}
export default new ProjectService(repo);
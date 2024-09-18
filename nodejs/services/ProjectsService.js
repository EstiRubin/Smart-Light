import repo from '../repositories/ProjectsRepo.js';
import BaseService from './BaseService.js';

class ProjectsService extends BaseService{
    constructor(repo){
        super(repo);
    }

    async update(id, data){
        try{
            return await this.repo.update(id, data);
        }
        catch(errors){
            console.log(errors);
            throw new Error("unable to update Projects.");
        }
    }
}
export default new ProjectsService(repo);
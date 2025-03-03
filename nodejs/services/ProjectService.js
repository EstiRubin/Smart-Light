import repo from '../repositories/ProjectRepo.js';
import BaseService from './BaseService.js';

class ProjectService extends BaseService{
    constructor(repo){
        super(repo);
    }
    


}
export default new ProjectService(repo);
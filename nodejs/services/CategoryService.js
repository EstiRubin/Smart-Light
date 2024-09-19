import BaseService from "./BaseService";

class categoriesService extends BaseService {
    constructor(repo) {
        super(repo);
    }

    async add(data){
        try{
            return await this.repo.create(data);
        }
        catch(errors){
            console.log(errors);
            throw new Error("Unable to add new category.");
        }
    }

    async update(category){
        try{
            return await this.repo.update(id, category);
        }
        catch(errors){
            console.log(errors);
            throw new Error("Unable to add new category.");
        }
      }

}
export default categoriesService;
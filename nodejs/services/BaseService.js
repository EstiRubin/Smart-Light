class BaseService{
  constructor(repo){
      this.repo = repo;
  }

  async getAll(params){
      return await this.repo.getAll(params);
  }

  async getById(id){
      return await this.repo.getById(id);
  }
}
export default BaseService;


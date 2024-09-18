import autoBind from "auto-bind";

class BaseController{
    constructor(service){
        this.service = service;
        autoBind(this);
    }

    async getAll(req, res, next){
        try {
            const f = req.query;
            const response = await this.service.getAll(f);
            return res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }
    
    async getById(req, res, next){
        const { id } = req.params;
        try {
            const response = await this.service.getById(id);
            return res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }
}

export default BaseController;
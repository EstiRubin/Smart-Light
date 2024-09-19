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

    async add(req, res, next) {
        try {
            const response = await this.service.add(req.body);
            return res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }

    async update(req, res, next) {
        const { id } = req.params;
        try {
            const response = await this.service.update(id, req.body);
            return res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }

    async delete(req, res, next) {
        const { id } = req.params;
        try {
            const response = await this.service.delete(id);
            return res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }
}

export default BaseController;
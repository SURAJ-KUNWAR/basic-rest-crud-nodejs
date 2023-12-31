const {Logger} = require("../config")

class CrudRepository {
    constructor(model){
        this.model = model;
    }
    
    async create (data){
        try{
            const response = await this.model.create(data);
            return response;
        }catch(err){
            Logger.error('Something went wrong in the crud Repo : create')
            throw err ; 
        }
    }

    async destroy (data){
        try{
            const response = await this.model.create({
                where :{
                    id: data
                }
            });
            return response;
        }catch(err){
            Logger.err('Something went wrong in the crud Repo : destroy')
            throw err ; 
        }
    }

 

    async get (data){
        try{
            const response = await this.model.findByPK(data);
            return response;
        }catch(err){
            Logger.err('Something went wrong in the crud Repo : get')
            throw err ; 
        }
    }

    async getAll (data){
        try{
            const response = await this.model.findAll(data);
            return response;
        }catch(err){
            Logger.err('Something went wrong in the crud Repo : getAll')
            throw err ; 
        }
    }

    async update (id , data){
        try{
            const response = await this.model.update(data , {
                where : {
                    id : id
                }
            });
            return response;
        }catch(err){
            Logger.err('Something went wrong in the crud Repo : update')
            throw err ; 
        }
    }

}

module.exports = CrudRepository
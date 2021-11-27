const database = require('../models');


class colaboradorController {
    static async index(req, res) {
        try {
         const colaboradores = await database.Colaborador.findAll()
         return res.status(200).json(colaboradores);
            
        } catch (error) {
            return res.status(500).json(error.message);
        }
     

        
    } 

    static async update(req, res){
        const {id} = req.params
        const newInfo = req.body
        try{
            await database.Colaborador.update(newInfo, { 
                where: {
                id: Number(id)
            }     
            })
            const updateColaborador = await database.Colaborador.findOne({
                where: {
                    id:Number(id)
                }
            })
            return res.status(200).json(updateColaborador)

        }catch(error){
            return res.status(500).json(error.message)
        }
    }


}
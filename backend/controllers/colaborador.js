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




}
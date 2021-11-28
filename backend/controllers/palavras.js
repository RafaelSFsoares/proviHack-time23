const database = require('../models');


class palavrasController {
    static async index(req, res) {
        try {
         const palavrasColocadas = await database.Palavras.findAll()
         return res.status(200).json(palavrasColocadas);
            
        } catch (error) {
            return res.status(500).json(error.message);
        }
     

        
    } 

    static async show (req, res) {
        const {lingua} = req.params
        try {
            const idPalavras = await database.Palavras.findAll( { where:
                 { lingua: String(lingua) }
                })
            return res.status(200).json(idPalavras);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }


    static async save (req, res) {
        const novasPalavras =  req.body
        try {
            const createPalavras = await database.Palavras.create(novasPalavras);
            return res.status(200).json(createPalavras);

        } catch (error) {
          return res.status(500).json(error.message);

        }
    } 

    static async update(req, res){
        const {id} = req.params
        const newInfo = req.body
        try{
            await database.Palavras.update(newInfo, { 
                where: {
                id: Number(id)
            }     
            })
            const updatePalavra = await database.Palavras.findOne({
                where: {
                    id:Number(id)
                }
            })
            return res.status(200).json(updatePalavra)

        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async remove(req, res){
        const {id} = req.params
        try{
            await database.Palavras.destroy({
                where: {
                    id:Number(id)
                }
            })
            return res.status(200).json({mensagem: `id ${id} deletado`})

        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = palavrasController;
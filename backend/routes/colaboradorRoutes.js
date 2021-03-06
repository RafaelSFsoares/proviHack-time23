const { Router} = require('express');
const colaboradorController = require ('../controllers/colaborador.js');

const router = Router();

router.get('/colaborador', colaboradorController.index);
router.get('/colaborador/:id', colaboradorController.show);
router.post('/colaborador', colaboradorController.save);
router.put('/colaborador/:id', colaboradorController.update);
router.delete('/colaborador/:id', colaboradorController.remove);



module.exports = router;
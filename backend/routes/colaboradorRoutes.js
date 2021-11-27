const { Router} = require('express');
const colaboradorController = require ('../controllers/colaborador.js');

const router = Router();

router.get('/colaborador', colaboradorController.index);
router.get('/colaborador:id', colaboradorController.show);
router.post('/colaborador', colaboradorController.save);
router.put('/:id', colaboradorController.update);
router.delete('/:id', colaboradorController.remove);



module.exports = router;
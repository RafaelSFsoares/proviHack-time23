const { Router} = require('express');
const colaboradorController = require ('../controllers/colaborador.js');

const router = Router();

router.get('/', colaboradorController.index);
router.get('/:id', colaboradorController.show);
router.post('/', colaboradorController.save);
router.put('/:id', colaboradorController.update);
router.delete('/:id', colaboradorController.remove);



module.exports = router;
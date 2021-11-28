const { Router} = require('express');
const palavrasController = require ('../controllers/palavras');

const router = Router();

router.get('/palavras', palavrasController.index);
router.get('/palavras/:id', palavrasController.show);
router.post('/palavras', palavrasController.save);
router.put('/palavras/:id', palavrasController.update);
router.delete('/palavras/:id', palavrasController.remove);



module.exports = router;
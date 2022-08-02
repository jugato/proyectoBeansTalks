const router = require('express').Router();
const animeController = require('../controllers/animeController');

router.get('/', animeController.home);
router.post('/buscar', animeController.buscar);
router.get('/top/:top', animeController.top);
router.get('/topCh/:character', animeController.topCharacters);
router.get('/delete/:id', animeController.delete);

module.exports = router;
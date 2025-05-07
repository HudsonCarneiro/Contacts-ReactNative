const express = require('express');
const router = express.Router();
const contatoController = require('../controllers/contatoController');

router.get('/api/contatos', contatoController.lista);
module.exports = router;
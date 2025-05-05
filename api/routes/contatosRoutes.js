const express = require('express');
const router = express.Router();
const contatoController = require('../controllers/contatoController');

router.get('/contatos', contatoController.lista);
module.exports = router;
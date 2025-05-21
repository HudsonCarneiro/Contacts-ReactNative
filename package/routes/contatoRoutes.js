const express = require('express');
const router = express.Router();
const contatoController = require('../controllers/contatoController');
const { verificaToken } = require('../middeware/authMiddeware')

router.get('/api/contatos', verificaToken, contatoController.lista);
module.exports = router;
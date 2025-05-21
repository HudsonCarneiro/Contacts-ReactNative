const contatos = require('../models/contato');

exports.lista = (req, res) => {
    res.json(contatos);
}
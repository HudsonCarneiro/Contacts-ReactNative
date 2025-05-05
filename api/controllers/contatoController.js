const contato = require('../models/contato');

exports.lista = (req, res) => {
    res.json(contato);
}
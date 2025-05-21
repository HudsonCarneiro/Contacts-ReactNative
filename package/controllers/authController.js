const jwt = require('jsonwebtoken');
const usuario = require('../models/usuarios');

exports.login = (req, res) => {
    const {email, senha} = req.body;

    if(email === usuario.email && senha == usuario.senha){
        const token = jwt.sign({email}, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });
        res.json({
            success: true,
            token: token
        })
    } else {
        res.json({
            success: false,
            message: 'credencial invalida'
        })
    }
}
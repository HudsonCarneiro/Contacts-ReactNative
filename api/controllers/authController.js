const jwt = require('jsonwebtoken');
require('dotenv').config();
const usuario = require("../models/usuarios");

exports.login = (req, res) => {
    const {email, senha} = req.body;

    if(email === usuario.email && senha === usuario.senha){
        const token = jwt.sign({email, senha}, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });
        res.json({
            sucess: true, 
            token: token
        })
    } else {
        res.json({
            sucess: false,
            message: 'credencial invalida'
        })
    }
}
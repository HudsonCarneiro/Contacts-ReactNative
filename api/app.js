const express = require ('express');
const app = express ();
const cors = require('cors');
const bodyParser = require('body-parser')

const constOptions = {
    origin: 'http://localhost:3000',
    method: ['GET', 'POST'],
    allowedHeader: [
        'Content-Type',
        'Authorization'
    ]
}
app.use(cors(constOptions));
app.use(express.json());
app.use(bodyParser.json(
    {type: 'application/**json'})
)
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.send('<h1>Olá</h1>');
})

const contatoRoutes = require('./routes/contatosRoutes');
app.use('/', contatoRoutes);

module.exports = app;
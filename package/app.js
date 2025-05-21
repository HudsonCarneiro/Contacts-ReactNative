require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const consOptions = {
    origin: 'http://localhost:3000',
    method: ['GET', 'POST'],
    allowedHeaders: [
        'Content-Type', 
        'Authorization'
    ]
}

app.use(cors(consOptions));
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

const authRoutes  = require('./routes/authRoutes');
const contatoRoutes = require('./routes/contatoRoutes');

app.use('/', authRoutes)
app.use('/', contatoRoutes);

module.exports = app;
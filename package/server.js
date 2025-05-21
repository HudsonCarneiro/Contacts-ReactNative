const app = require('./app');

const PORT = 3000;
app.listen(PORT, () => {
console.log(`
    Rodando em http://localhost:${PORT}
`);
})
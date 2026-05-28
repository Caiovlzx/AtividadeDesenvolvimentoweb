const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bem Vindo ao Sistema');
});

app.get('/Sobre', (req, res) => {
    res.send('Essa aplicação é muito importante')

})

app.get('/contato', (req, res) => {
    res.json({
    "email": "contato@email.com",
    "telefone": "(81) 99999-9999"
});

})

app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bem Vindo ao Sistema');
});

app.get('/Sobre', (req, res) => {
    res.send()

})


app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);
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

app.get('/erro', (req, res) => {
    res.status(404).send('Página não encontrada');
});

app.get('/inicio', (req, res) => {
    res.redirect('/');
});

app.get('/usuarios/:id', (req, res) => {
    const ids  = req.params.id
    res.send('Usuario ' + ids);
});

app.get('/produtos/:nome', (req, res) => {
    const none  = req.params.nome
    res.send('Comprado ' + none);
});

app.get('/filmes/:id/:nome', (req, res) => {
    const none  = req.params.nome
    const ids = req.params.id
    res.send('Filme ' + ids + none );
});

app.get('/buscar', (req, res) => {
    const {nome} = req.query
    res.send(`Buscando por : ${nome}`)
});

app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);
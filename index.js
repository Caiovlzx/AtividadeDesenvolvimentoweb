const express = require('express');
const exphbs = require('express-handlebars');
const app = express();


app.engine('handlebars', exphbs.engine({defaultLayout:false}));
app.set('view engine', 'handlebars');

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

app.get('/produtos', (req, res) => {
    const {categoria} = req.query
    const {pagina} = req.query
    res.send(`${categoria} ${pagina}`)
});

app.get('/usuarios', (req, res) => {
    const {idade} = req.query
    res.send(`Filtrando usuários com idade ${idade}`)
});

app.get('/Perfil', (req, res) => {
    res.render('home',{nome: 'João', idade: 20});
});

app.get('/Film', (req, res) => {

    const filmes =  [
        {nome: 'Avengers', Lançamento: 2012},
        {nome: 'Batman', Lançamento: 2008},
        {nome: 'Superman', Lançamento: 2013}
    ];


    res.render('film', {filmes: filmes});
});

app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);

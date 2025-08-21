const express = require("express");
const bodyParser = require('body-parser');
const sequelize = require("./database/database");
const app = express();
const port = 4000;

// config View Engine
app.set('view engine', 'ejs');

// config asset Statics
app.use(express.static('public'));

// config Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// config DataBase
try
{
    sequelize.authenticate();
    console.log('conexão feita com sucesso!');
} catch(err)
{
    console.log(`ERRO! ---> ${err.menssage}`)
}

// porta de entrada
app.get('/', function(req,res)
{
    res.render('index');
})


// Startando servidor
app.listen(port, function(){
    console.log(`Servidor rodando na porta ${port}`)
})
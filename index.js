const express = require("express");
const app = express();
const port = 4000;

// porta de entrada
app.get('/', function(req,res)
{
    res.send("Hello world!");
})


// Startando servidor
app.listen(port, function(){
    console.log(`Servidor rodando na porta ${port}`)
})
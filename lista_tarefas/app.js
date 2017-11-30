var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    tarefas = require("./controller/tarefas"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    index = require("./controller/index");
    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));
app.use(methodOverride("_method"));

//Tratamento para a route principal da api, onde todas as tarefas presentes no banco de dados serão retornadas (Método Get)
app.use('/api',tarefas);
//Tratamento para a aplicação Web
app.use('/',index);


app.listen(process.env.PORT, function(){
    console.log("Servidor iniciado com sucesso");
})
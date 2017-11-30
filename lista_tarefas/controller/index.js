var express = require("express"),
    router  = express.Router(),
    Tarefa = require("../models/tarefas");

//Get para o home da aplicação
router.get('/', function(req,res){
    
    Tarefa.find()
    .then(function(tarefas){
        res.render("index",{tarefas:tarefas});
    })
    .catch(function(err){
        res.send(err);
    })
    
})

module.exports = router
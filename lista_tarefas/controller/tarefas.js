var express = require("express"),
    router  = express.Router(),
    mongoose = require("mongoose"),
    Tarefa = require("../models/tarefas");
    
mongoose.connect("mongodb://progab:2105@ds155325.mlab.com:55325/portifolio");
mongoose.Promise = Promise;

//Tratamento para o método get da api, para requisitar à API todas as tarefas cadastradas no banco de dados
router.get('/', function(req,res){
    Tarefa.find()
    .then(function(tarefas){
        res.json(tarefas);
    })
    .catch(function(err){
        res.send(err);
    })
})

//Tratamento par ao método post da api, para postar uma nova tarefa
router.post('/', function(req,res){
  console.log(req.body)
  Tarefa.create(req.body,function(tarefa){
       res.redirect("/")
   });
})


router.delete('/:tarefaId', function(req,res){
  
  Tarefa.remove({_id:req.params.tarefaId})
    .then(function(){
        res.redirect("/")
    })
    .catch(function(err){
        res.send(err);
    })
    
})

module.exports = router
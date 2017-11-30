var mongoose = require('mongoose');
mongoose.connect("mongodb://progab:2105@ds155325.mlab.com:55325/portifolio");
mongoose.Promise = Promise;
module.exports.Tarefa = require("./tarefas");
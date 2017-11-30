var mongoose = require("mongoose");

var esquemaTarefa = new mongoose.Schema({

    descricao:{
        type:String,
        required:true
    },
    feito:{
        type:Boolean,
        default:false
    },
    timestamp:{
        type:Date,
        default:Date.now
    }

})

var modeloTarefa = mongoose.model('Tarefa', esquemaTarefa)
module.exports = modeloTarefa
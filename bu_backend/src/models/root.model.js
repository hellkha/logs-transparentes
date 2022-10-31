const mongoose = require("mongoose");
// const url = 'mongodb://127.0.0.1:5432/bu_db';
// mongoose.connect(url)


const rootSchema = new mongoose.Schema({  
    _id: { type: Number, required: true }  ,
    id: { type: Number, required: true }  ,
    raiz: String,
    busadicionados: String,
    timestamp: String,
    assinatura: String
});

const modeloroot = mongoose.model("roots",rootSchema) //"roots" = collection of database


module.exports = {modeloroot}
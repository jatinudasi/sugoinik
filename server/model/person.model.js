const mongoose = require("mongoose");

const {Schema,model} = mongoose;

const person = new Schema({
email:{
    type:String,
    lowercase:true,
    trim:true,
    required:true,
    match: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
},
name:{
    type:String,
    trim:true,
    required:true
},
info:{
    type:String,
    trim:true,
    required:true
},
img:{
    type:String,
    trim:true
}

});

module.exports = model("Person",person);
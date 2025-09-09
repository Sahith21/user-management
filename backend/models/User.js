const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name : {type:String,required:true},
    age : {type:Number,requied:true},
    phone : {type:Number,required:true,unique:true},
    address : {type:String,required:true}
},{timestamps:true});

module.exports = mongoose.model("User",userSchema);
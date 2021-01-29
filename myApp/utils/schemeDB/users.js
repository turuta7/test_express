const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const modelUsers= new Schema({
    name: String,
    age: Number
},{ timestamps: true });

module.exports = {modelUsers}
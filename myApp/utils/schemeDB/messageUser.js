const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const modelMessage= new Schema({
    email: String,
    text: String
},{ timestamps: true });

module.exports = {modelMessage}
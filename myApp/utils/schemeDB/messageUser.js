const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const modelMessage= new Schema({
    email: String,
    massage: String
},{ timestamps: true });

module.exports = {modelMessage}
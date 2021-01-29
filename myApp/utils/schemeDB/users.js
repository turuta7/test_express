const mongoose = require("mongoose");
const Schema = mongoose.Schema;

exports.module = new Schema({
    name: String,
    age: Number
});
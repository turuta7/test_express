const mongoose = require("mongoose");
const {modelUsers} = require('./users');
const Person = mongoose.model('User', modelUsers );


const getAllUsers = async () => {
    return Person.find({}, {_id:0});
}

module.exports = {getAllUsers}

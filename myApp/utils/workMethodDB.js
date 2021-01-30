const mongoose = require("mongoose");
const {modelMessage} = require('./schemeDB/messageUser');
const Message = mongoose.model(process.env.NAME_COLLECTION, modelMessage);
const limit = 10;

const getFindMessage = async (num = 10, id = undefined) => {
    if (id) {
        return Message.find({_id: id}, {__v: 0});
    } else {
        return Message.find({}, {email: 1, text: 1}).skip(num - 10).limit(limit);
    }
};

const createMessageUser = async (email, text) => {
    return Message.create({email, text})
};

module.exports = {getFindMessage, createMessageUser}

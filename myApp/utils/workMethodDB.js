const mongoose = require("mongoose");
const {modelMessage} = require('./schemeDB/messageUser');
const Message = mongoose.model(process.env.NAME_COLLECTION, modelMessage);
const limit = 10;

const getFindMessage = async (num = 10, id = undefined) => {
    if (id) {
        return Message.find({_id: id});
    } else {
        return Message.find().skip(num - 10).limit(limit);
    }
};

const createMessageUser = async (email, massage) => {
    return Message.create({email, massage})
};

module.exports = {getFindMessage, createMessageUser}

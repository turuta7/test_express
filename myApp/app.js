const mongoose = require("mongoose");
const startServer = require('./server/bin/www');

require('dotenv').config();

// start app Connection DB + Server
mongoose.connect(process.env.URL_DB + process.env.NAME_DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => {
        console.log('connection DB - ok');
        startServer().then(() => {
            console.log('start server')
        }).catch(e => {
            console.log('error start', e)
        })
    }).catch(err => console.log("connection DB - error", err));

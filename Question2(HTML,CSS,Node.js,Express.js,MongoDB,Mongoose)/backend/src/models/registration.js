const mongoose = require('mongoose');

const registrationschema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    doubt: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required:true
    },
    time:{
        type:String,
    }
});

const candidate = new mongoose.model('Register', registrationschema);
module.exports = candidate;


const mongoose = require('mongoose');

const emailValidationRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneValidationRegex = /^\d{10}$/;


var contactSchema = new mongoose.Schema({
    surname: {
        type: String,
        required: 'This field is required.'
    },
    email: {
        type: String,
        required: 'This field is required.',
        match: emailValidationRegex
    },
    phones: [
        {
            type: String,
            required: 'This field is required.',
            match: phoneValidationRegex
        }
    ],
    address: {
        type: String
    }
}, {
    versionKey: false
});

mongoose.model('Contact', contactSchema);
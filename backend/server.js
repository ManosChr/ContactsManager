console.log("SERVER STARTING");
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

/**
 * Database settings
 */
mongoose.connect('mongodb://localhost:27017/contact_manager', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});
require('./models/Contact');

/**
 * Server settings
 */
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.listen(5000, () => console.log('Express server started at port : 5000'));

/**
 * Load controllers
 */
const contactsController = require('./controllers/ContactsController');
app.use('/api/v1.0', contactsController);
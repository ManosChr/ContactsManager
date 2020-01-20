const express = require('express');
const mongoose = require('mongoose');
const Contact = mongoose.model('Contact');
let router = express.Router();

/**
 * Error codes
 */
const VALIDATION_ERROR = 100;
const SERVER_ERROR = 101;


/**
 * Controller crud methods
 */
router.get('/contacts', (req, res) => readRecords(res));
router.get('/contacts/:id', (req, res) => readSingleRecord(req, res));
router.post('/contacts', (req, res) => insertRecord(req, res));
router.put('/contacts', (req, res) => updateRecord(req, res));
router.delete('/contacts/:id', (req, res) => deleteRecord(req, res));

/**
 * Insert a new Contact record and return its value (_id generated included)
 * 
 * @param {*} req 
 * @param {*} res 
 */
function insertRecord(req, res) {
    let contact = new Contact();
    contact.surname = req.body.surname;
    contact.email = req.body.email;
    contact.address = req.body.address;
    contact.phones = req.body.phones;
    contact
        .save()
        .then((r) => res.send(r), (e) => handleError(e, res));
}

/**
 * Read all Contact records (_id generated included)
 * 
 * @param {*} res 
 */
function readRecords(res) {
    Contact
        .find({})
        .then((r) => res.send(r), (e) => handleError(e, res));
}

/**
 * Read one Contact (_id generated included)
 * 
 * @param {*} req
 * @param {*} res 
 */
function readSingleRecord(req, res) {
    Contact
        .findById({ _id: req.params._id })
        .then((r) => res.send(r), (e) => handleError(e, res));
}

/**
 * Delete a Contact record by _id and return the deleted record (_id generated included)
 * 
 * @param {*} req 
 * @param {*} res 
 */
function deleteRecord(req, res) {
    Contact
        .findOneAndDelete({ _id: req.params._id })
        .then((r) => res.send(r), (e) => handleError(e, res));
}

/**
 * Update a Contact record by _id and return the updated record (_id generated included)
 * 
 * @param {*} req 
 * @param {*} res 
 */
function updateRecord(req, res) {
    Contact.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true })
        .then((r) => res.send(r), (e) => handleError(e, res));
}

/**
 * Handle error method
 * 
 * @param {*} message 
 * @param {*} name 
 * @param {*} errorCode 
 */
function handleError(error, res) {
    error.name.startsWith("Validation")
        ? res.send({ error: error, name: "VALIDATION_ERROR", code: VALIDATION_ERROR })
        : res.send({ error: error, name: "SERVER_ERROR", code: SERVER_ERROR });
}

module.exports = router;
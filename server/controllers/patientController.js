const Patient = require('../model/Patient');

const getAllPatient = async (req, res) => {
    const patients = await Patient.find();
    if (!patients) return res.status(204).json({ 'message': 'No patients found.' });
    res.json(patients);
}

const createNewPatient = async (req, res) => {
    if (!req?.body?.firstname || !req?.body?.lastname) {
        return res.status(400).json({ 'message': 'First and last names are required' });
    }

    try {
        const result = await Patient.create({
            firstname: req.body.firstname,  
            lastname: req.body.lastname
        });

        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}

const updatePatient = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({ 'message': 'ID parameter is required.' });
    }

    const patient = await Patient.findOne({ _id: req.body.id }).exec();
    if (!patient) {
        return res.status(204).json({ "message": `No patient matches ID ${req.body.id}.` });
    }
    if (req.body?.firstname) patient.firstname = req.body.firstname;
    if (req.body?.lastname) patient.lastname = req.body.lastname;
    const result = await patient.save();
    res.json(result);
}

const deletePatient = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({ 'message': 'Patient ID required.' });

    const patient = await Patient.findOne({ _id: req.body.id }).exec();
    if (!patient) {
        return res.status(204).json({ "message": `No patient matches ID ${req.body.id}.` });
    }
    const result = await patient.deleteOne(); //{ _id: req.body.id } 
    res.json(result);
}

const getPatient = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ 'message': 'Patient ID required.' });

    const patient = await Patient.findOne({ _id: req.params.id }).exec();
    if (!patient) {
        return res.status(204).json({ "message": `No patient matches ID ${req.params.id}.` });
    }
    res.json(patient);
}

module.exports = {
    getAllPatient,
    createNewPatient,
    updatePatient,
    deletePatient,
    getPatient
}
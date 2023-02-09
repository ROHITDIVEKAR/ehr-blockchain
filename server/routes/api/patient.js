const express = require('express');
const router = express.Router();
const patient = require('../../controllers/patientController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(patient.getAllPatient)
    .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), patient.createNewPatient)
    .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), patient.updatePatient)
    .delete(verifyRoles(ROLES_LIST.Admin), patient.deletePatient);

router.route('/:id')
    .get(patient.getPatient);

module.exports = router;
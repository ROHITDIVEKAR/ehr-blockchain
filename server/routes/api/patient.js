const express = require('express');
const router = express.Router();
const patient = require('../../controllers/patientController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(verifyRoles(ROLES_LIST.Editor), patient.getAllPatient)
    .post(verifyRoles(ROLES_LIST.Editor), patient.createNewPatient)
    .put(verifyRoles(ROLES_LIST.Editor), patient.updatePatient)
    .delete(verifyRoles(ROLES_LIST.Editor), patient.deletePatient);

router.route('/:id')
    .get(verifyRoles(ROLES_LIST.Editor, ROLES_LIST.Viewer),patient.getPatient);

module.exports = router;
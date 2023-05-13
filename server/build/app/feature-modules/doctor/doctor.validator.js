"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOCTOR_UPDATE_VALIDATOR = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utils/validate");
// name:string,
// email:string,
// password:string,
// role:string,
// societyId:string,
// insauranceId:string,
// hospitalId:string,
exports.DOCTOR_UPDATE_VALIDATOR = [
    (0, express_validator_1.param)("_id").isString().notEmpty().withMessage("id req"),
    (0, express_validator_1.body)("name").optional().isString().notEmpty().withMessage("name req"),
    (0, express_validator_1.body)("societyId").optional().isString().notEmpty().withMessage("society req"),
    (0, express_validator_1.body)("insuaranceId").optional().isString().notEmpty().withMessage("insaurance id must be string"),
    (0, express_validator_1.body)("hospitalId").optional().isString().notEmpty().withMessage("hospital req"),
    validate_1.validate
];
//# sourceMappingURL=doctor.validator.js.map
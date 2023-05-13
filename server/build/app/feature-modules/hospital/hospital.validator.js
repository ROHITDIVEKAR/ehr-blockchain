"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HOSPITAL_UPDATE_VALIDATOR = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utils/validate");
exports.HOSPITAL_UPDATE_VALIDATOR = [
    (0, express_validator_1.param)("_id").isString().notEmpty().withMessage("id req"),
    (0, express_validator_1.body)("name").optional().isString().notEmpty().withMessage("name req"),
    (0, express_validator_1.body)("societyId").optional().isString().notEmpty().withMessage("society req"),
    (0, express_validator_1.body)("insuaranceId").optional().isString().notEmpty().withMessage("insaurance id must be string"),
    (0, express_validator_1.body)("hospitalId").optional().isString().notEmpty().withMessage("hospital req"),
    validate_1.validate
];
//# sourceMappingURL=hospital.validator.js.map
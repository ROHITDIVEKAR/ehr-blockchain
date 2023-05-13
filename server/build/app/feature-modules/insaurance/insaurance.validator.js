"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INSAURANCE_UPDATE_VALIDATOR = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utils/validate");
exports.INSAURANCE_UPDATE_VALIDATOR = [
    (0, express_validator_1.param)("_id").isString().notEmpty().withMessage("id req"),
    (0, express_validator_1.body)("name").optional().isString().notEmpty().withMessage("name req"),
    (0, express_validator_1.body)("price").optional().isString().notEmpty().withMessage("price req"),
    validate_1.validate
];
//# sourceMappingURL=insaurance.validator.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPDATE_USER_VALIDATION = exports.CREATE_USER_VALIDATION = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utils/validate");
exports.CREATE_USER_VALIDATION = [
    (0, express_validator_1.body)('name').isString().notEmpty().withMessage("Name is required"),
    (0, express_validator_1.body)('email').isString().notEmpty().withMessage("Email is required").isEmail().withMessage("Email should be valid"),
    (0, express_validator_1.body)('password').isString().notEmpty().withMessage("password is required").isLength({ min: 6 }).withMessage('Password should be of length 6'),
    (0, express_validator_1.body)('friends').optional().isArray().isLength({ min: 1 }),
    validate_1.validate
];
exports.UPDATE_USER_VALIDATION = [
    (0, express_validator_1.body)("_id").isString().notEmpty().withMessage("Id is required"),
    (0, express_validator_1.body)('name').optional().isString().notEmpty().withMessage("Name is required"),
    (0, express_validator_1.body)('email').optional().isString().notEmpty().withMessage("Email is required").isEmail().withMessage("Email should be valid"),
    (0, express_validator_1.body)('password').optional().isString().notEmpty().withMessage("password is required").isLength({ min: 6 }).withMessage('Password should be of length 6'),
    (0, express_validator_1.body)('friends').optional().isArray().isLength({ min: 1 }),
    validate_1.validate
];
//# sourceMappingURL=user.validation.js.map
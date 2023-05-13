"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constant_1 = require("../../utils/constant");
const express_1 = require("express");
const filterPipeline_1 = require("../../utils/filterPipeline");
const checkrole_1 = require("../../utils/checkrole");
const insaurance_service_1 = __importDefault(require("./insaurance.service"));
const response_handler_1 = require("../../utils/response.handler");
const insaurance_validator_1 = require("./insaurance.validator");
const router = (0, express_1.Router)();
router.get("/", filterPipeline_1.FILTER_PRODUCT_VALIDATOR, (0, checkrole_1.validateRole)([constant_1.Role.ADMIN, constant_1.Role.DOCTOR, constant_1.Role.SOCIETY_ADMIN, constant_1.Role.USER]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query;
        const result = yield insaurance_service_1.default.getAllInsaurace(query);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (error) {
        next(error);
    }
}));
router.patch("/:id", (0, checkrole_1.validateRole)([constant_1.Role.ADMIN, constant_1.Role.SOCIETY_ADMIN, constant_1.Role.USER]), insaurance_validator_1.INSAURANCE_UPDATE_VALIDATOR, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = req.params.id;
        const data = req.body;
        const result = yield insaurance_service_1.default.update({ _id: _id }, data);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (error) {
        next(error);
    }
}));
router.delete("/:id", (0, checkrole_1.validateRole)([constant_1.Role.ADMIN, constant_1.Role.SOCIETY_ADMIN, constant_1.Role.USER]), insaurance_validator_1.INSAURANCE_UPDATE_VALIDATOR, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = req.params.id;
        const result = yield insaurance_service_1.default.update({ _id: _id }, { isDeleted: true });
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (error) {
        next(error);
    }
}));
//# sourceMappingURL=insaurance.route.js.map
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
const express_1 = require("express");
const response_handler_1 = require("../../utils/response.handler");
const user_service_1 = __importDefault(require("./user.service"));
const user_validation_1 = require("./user.validation");
const router = (0, express_1.Router)();
// router.use(validateToken);
router.get('/all', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log({ baseUrl: req.baseUrl, url: req.url, originalUrl: req.originalUrl, path: req.path });
        const result = yield user_service_1.default.find();
        res.send(new response_handler_1.ResponseHandler(result, null));
    }
    catch (error) {
        next(error);
    }
}));
router.get('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        console.log(id);
        const result = yield user_service_1.default.findOne({ _id: id });
        res.send(new response_handler_1.ResponseHandler(result, null));
    }
    catch (error) {
        next(error);
    }
}));
router.post('/', user_validation_1.CREATE_USER_VALIDATION, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const result = yield user_service_1.default.create(user);
        res.send(new response_handler_1.ResponseHandler(result, null));
    }
    catch (error) {
        next(error);
    }
}));
router.patch('/', user_validation_1.UPDATE_USER_VALIDATION, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const result = yield user_service_1.default.update(user);
        res.send(new response_handler_1.ResponseHandler(result, null));
    }
    catch (error) {
        next(error);
    }
}));
router.delete('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield user_service_1.default.deleteOne(id);
        res.send(new response_handler_1.ResponseHandler(result, null));
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
//# sourceMappingURL=user.routes.js.map
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
const auth_responses_1 = require("./auth.responses");
const token_1 = require("../../utils/token/token");
const user_service_1 = __importDefault(require("../user/user.service"));
const bcryptjs_1 = require("bcryptjs");
const user_resposne_1 = require("../user/user.resposne");
const hospital_service_1 = __importDefault(require("../hospital/hospital.service"));
const society_service_1 = __importDefault(require("../society/society.service"));
const doctor_service_1 = __importDefault(require("../doctor/doctor.service"));
const encryptPassword = (data) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, bcryptjs_1.hash)(data, yield (0, bcryptjs_1.genSalt)(10)); });
const register = (data) => __awaiter(void 0, void 0, void 0, function* () {
    if (data.role == process.env.ROLE_HOSPITAL_ADMIN) {
        const userExists = yield hospital_service_1.default.findOne({ email: data.email });
        if (userExists)
            throw user_resposne_1.USER_RESPONSE.ALREADY_EXISTS;
        yield encryptPassword(data.password);
        const hospital = yield hospital_service_1.default.create(data);
        return hospital;
    }
    if (data.role == process.env.ROLE_SOCIETY_ADMIN) {
        const userExists = yield society_service_1.default.findOne({ email: data.email });
        if (userExists)
            throw user_resposne_1.USER_RESPONSE.ALREADY_EXISTS;
        yield encryptPassword(data.password);
        const society = yield society_service_1.default.create(data);
        return society;
    }
    if (data.role == process.env.ROLE_DOCTOR) {
        const userExists = yield doctor_service_1.default.findOne({ email: data.email });
        if (userExists)
            throw user_resposne_1.USER_RESPONSE.ALREADY_EXISTS;
        yield encryptPassword(data.password);
        const doctor = yield doctor_service_1.default.create(data);
        return doctor;
    }
    if (data.role == process.env.ROLE_USER) {
        const userExists = yield user_service_1.default.findOne({ email: data.email });
        if (userExists)
            throw user_resposne_1.USER_RESPONSE.ALREADY_EXISTS;
        yield encryptPassword(data.password);
        console.log(data);
        const user = yield user_service_1.default.create(data);
        return user;
    }
});
const login = (credential) => __awaiter(void 0, void 0, void 0, function* () {
    let user = yield user_service_1.default.findOne(credential);
    user = yield hospital_service_1.default.findOne(credential);
    user = yield society_service_1.default.findOne(credential);
    user = yield doctor_service_1.default.findOne(credential);
    if (!user)
        throw auth_responses_1.authResponses.INVALID_CREDENTIAL;
    const { _id, role } = user;
    const token = (0, token_1.generateToken)({ id: _id, role: role });
    return { token, role: role };
});
exports.default = {
    login, register
};
//# sourceMappingURL=auth.service.js.map
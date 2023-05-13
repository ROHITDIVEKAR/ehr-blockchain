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
const filterPipeline_1 = require("../../utils/filterPipeline");
const insaurance_repo_1 = __importDefault(require("./insaurance.repo"));
const insaurance_resposne_1 = require("./insaurance.resposne");
const insaurance_schema_1 = require("./insaurance.schema");
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield insaurance_repo_1.default.create(data);
    if (!result)
        throw insaurance_resposne_1.INSAURANCE_RESPONSE.UPDATE_FAILED;
    return result;
});
const getAllInsaurace = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    const filterPipeline = (0, filterPipeline_1.genratePipeline)(filter);
    return yield insaurance_repo_1.default.find(filterPipeline);
});
const findOne = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield insaurance_schema_1.insauranceModel.findOne(filter);
    if (!result)
        throw insaurance_resposne_1.INSAURANCE_RESPONSE.NOT_FOUND;
    return result;
});
const update = (filter, data) => insaurance_repo_1.default.update(filter, data);
const deleteUser = (filter) => update(filter, { $set: { isDeleted: true } });
exports.default = {
    create, getAllInsaurace, update, deleteUser, findOne
};
//# sourceMappingURL=insaurance.service.js.map
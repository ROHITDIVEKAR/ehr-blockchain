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
const society_repo_1 = __importDefault(require("./society.repo"));
const society_reponse_1 = require("./society.reponse");
const society_schema_1 = require("./society.schema");
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield society_repo_1.default.create(data);
    if (!result)
        throw society_reponse_1.SOCIETY_RESPONSE.UPDATE_FAILED;
    return result;
});
const getAllSociety = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    const filterPipeline = (0, filterPipeline_1.genratePipeline)(filter);
    return yield society_repo_1.default.find(filterPipeline);
});
const findOne = (filter) => __awaiter(void 0, void 0, void 0, function* () { return yield society_schema_1.societyModel.findOne(filter); });
const update = (filter, data) => society_repo_1.default.update(filter, data);
const deleteUser = (filter) => update(filter, { $set: { isDeleted: true } });
exports.default = {
    create, getAllSociety, update, deleteUser, findOne
};
//# sourceMappingURL=society.service.js.map
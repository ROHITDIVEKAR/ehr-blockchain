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
const user_repo_1 = __importDefault(require("./user.repo"));
const user_resposne_1 = require("./user.resposne");
const user_schema_1 = require("./user.schema");
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_repo_1.default.create(data);
    if (!result)
        throw user_resposne_1.USER_RESPONSE.UPDATE_FAILED;
    return result;
});
const getAllUser = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    const filterPipeline = (0, filterPipeline_1.genratePipeline)(filter);
    return yield user_repo_1.default.find(filterPipeline);
});
const findOne = (filter) => __awaiter(void 0, void 0, void 0, function* () { return yield user_schema_1.userModel.findOne(filter); });
const update = (filter, data) => user_repo_1.default.update(filter, data);
const deleteUser = (filter) => update(filter, { $set: { isDeleted: true } });
exports.default = {
    create, getAllUser, update, deleteUser, findOne
};
//# sourceMappingURL=user.service.js.map
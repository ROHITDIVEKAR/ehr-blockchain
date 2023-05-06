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
const user_repo_1 = __importDefault(require("./user.repo"));
const user_responses_1 = require("./user.responses");
const create = (user) => user_repo_1.default.create(user);
const find = () => user_repo_1.default.find({ password: 0 });
const findOne = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_repo_1.default.findOne(query);
    if (!user)
        throw user_responses_1.USER_RESPONSES.NOT_FOUND;
    return user;
});
const update = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_repo_1.default.update(user);
    if (result.modifiedCount > 0)
        return user_responses_1.USER_RESPONSES.UPDATED_SUCCESSFULLY;
    throw user_responses_1.USER_RESPONSES.NOT_UPDATED;
});
const deleteOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_repo_1.default.deleteOne(id);
    if (result.modifiedCount > 0)
        return user_responses_1.USER_RESPONSES.DELETED_SUCCESSFULLY;
    throw user_responses_1.USER_RESPONSES.NOT_DELETED;
});
exports.default = {
    create,
    find,
    findOne,
    update,
    deleteOne
};
//# sourceMappingURL=user.service.js.map
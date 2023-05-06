"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const user_schema_1 = require("./user.schema");
const create = (user) => user_schema_1.UserModel.create(user);
const find = (projection = {}) => {
    try {
        return user_schema_1.UserModel.find({ isDeleted: false }).select(Object.assign(Object.assign({}, projection), { password: 0 }));
    }
    catch (error) {
        throw { message: "Something went wrong", error: error };
    }
};
const findOne = (query, projection = {}) => {
    try {
        return user_schema_1.UserModel.findOne(Object.assign(Object.assign({}, query), { isDeleted: false })).select(projection);
    }
    catch (error) {
        throw { message: "Something went wrong", error: error };
    }
};
const update = (user) => {
    try {
        return user_schema_1.UserModel.updateOne({
            _id: new mongoose_1.default.Types.ObjectId(user._id),
            isDeleted: false
        }, user);
    }
    catch (error) {
        throw { message: "Something went wrong", error: error };
    }
};
const deleteOne = (id) => user_schema_1.UserModel.updateOne({ _id: new mongoose_1.default.Types.ObjectId(id), isDeleted: false }, { isDeleted: true });
exports.default = {
    create,
    find,
    findOne,
    update,
    deleteOne
};
//# sourceMappingURL=user.repo.js.map
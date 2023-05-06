"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const society_schema_1 = require("./society.schema");
const society_repo_1 = __importDefault(require("./society.repo"));
const create = (data) => society_schema_1.societyModel.create(data);
const find = (pipeline) => society_schema_1.societyModel.aggregate(pipeline);
const update = (filter, data) => society_schema_1.societyModel.updateOne(filter, { $set: data });
const updateSociety = (filter, data) => society_repo_1.default.update(filter, data);
exports.default = {
    create, find, update, updateSociety
};
//# sourceMappingURL=society.Service.js.map
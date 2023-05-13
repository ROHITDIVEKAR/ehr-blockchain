"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const society_schema_1 = require("./society.schema");
const create = (data) => society_schema_1.societyModel.create(data);
const find = (pipeline) => society_schema_1.societyModel.aggregate(pipeline);
const update = (filter, data) => society_schema_1.societyModel.updateOne(filter, data);
exports.default = {
    create, find, update
};
//# sourceMappingURL=society.repo.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const insaurance_schema_1 = require("./insaurance.schema");
const create = (data) => insaurance_schema_1.insauranceModel.create(data);
const find = (pipeline) => insaurance_schema_1.insauranceModel.aggregate(pipeline);
const update = (filter, data) => insaurance_schema_1.insauranceModel.updateOne(filter, data);
exports.default = {
    create, find, update
};
//# sourceMappingURL=insaurance.repo.js.map
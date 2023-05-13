"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hospital_schema_1 = require("./hospital.schema");
const create = (data) => hospital_schema_1.hospitalModel.create(data);
const find = (pipeline) => hospital_schema_1.hospitalModel.aggregate(pipeline);
const update = (filter, data) => hospital_schema_1.hospitalModel.updateOne(filter, data);
exports.default = {
    create, find, update
};
//# sourceMappingURL=hospital.repo.js.map
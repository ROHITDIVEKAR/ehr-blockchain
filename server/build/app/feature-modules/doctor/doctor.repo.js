"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const doctor_schema_1 = require("./doctor.schema");
const create = (data) => doctor_schema_1.doctorModel.create(data);
const find = (pipeline) => doctor_schema_1.doctorModel.aggregate(pipeline);
const update = (filter, data) => doctor_schema_1.doctorModel.updateOne(filter, data);
exports.default = {
    create, find, update
};
//# sourceMappingURL=doctor.repo.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./user.schema");
const create = (data) => user_schema_1.userModel.create(data);
const find = (pipeline) => user_schema_1.userModel.aggregate(pipeline);
const update = (filter, data) => user_schema_1.userModel.updateOne(filter, data);
exports.default = {
    create, find, update
};
//# sourceMappingURL=user.repo.js.map
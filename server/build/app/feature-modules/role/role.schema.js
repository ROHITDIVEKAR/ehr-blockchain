"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleModel = void 0;
const mongoose_1 = require("mongoose");
const baseschema_1 = require("../../utils/baseschema");
const roleSchema = new baseschema_1.BaseSchema({
    role: {
        type: String,
        required: true,
        unique: true
    }
});
exports.roleModel = (0, mongoose_1.model)("roles", roleSchema);
//# sourceMappingURL=role.schema.js.map
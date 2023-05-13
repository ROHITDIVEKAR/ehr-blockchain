"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insauranceModel = void 0;
const mongoose_1 = require("mongoose");
const baseschema_1 = require("../../utils/baseschema");
const insauranceSchema = new baseschema_1.BaseSchema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    }
});
exports.insauranceModel = (0, mongoose_1.model)("user", insauranceSchema);
//# sourceMappingURL=insaurance.schema.js.map
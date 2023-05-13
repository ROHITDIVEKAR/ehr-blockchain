"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doctorModel = void 0;
const mongoose_1 = require("mongoose");
const baseschema_1 = require("../../utils/baseschema");
const doctorSchema = new baseschema_1.BaseSchema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: mongoose_1.Types.ObjectId,
        ref: "roles",
        required: true
    },
    hospitalId: {
        type: mongoose_1.Types.ObjectId,
        ref: "hospitals"
    },
});
exports.doctorModel = (0, mongoose_1.model)("doctor", doctorSchema);
//# sourceMappingURL=doctor.schema.js.map
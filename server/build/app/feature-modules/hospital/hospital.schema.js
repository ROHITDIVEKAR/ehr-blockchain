"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hospitalModel = void 0;
const mongoose_1 = require("mongoose");
const baseschema_1 = require("../../utils/baseschema");
const hospitalSchema = new baseschema_1.BaseSchema({
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
    societyId: {
        type: mongoose_1.Types.ObjectId,
        ref: "societys",
    },
    address: {
        area: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        pincode: {
            type: Number
        }
    },
    contact: {
        type: Number
    }
});
exports.hospitalModel = (0, mongoose_1.model)("hospital", hospitalSchema);
//# sourceMappingURL=hospital.schema.js.map
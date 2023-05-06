"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const baseschema_1 = require("../../utils/baseschema");
const userSchema = new baseschema_1.BaseSchema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    gender: {
        type: String
    },
    contact: {
        type: Number
    },
    societyId: {
        type: mongoose_1.Types.ObjectId,
        ref: "societys"
    },
    insuarance: {
        type: mongoose_1.Types.ObjectId,
        ref: "insaurances"
    },
    dieases: {
        Type: Array
    },
    medicine: {
        type: Array
    },
    allergies: {
        type: Array
    },
    guardian: {
        type: mongoose_1.Types.ObjectId,
        ref: "users"
    }
});
exports.UserModel = (0, mongoose_1.model)('User', userSchema);
//# sourceMappingURL=user.schema.js.map
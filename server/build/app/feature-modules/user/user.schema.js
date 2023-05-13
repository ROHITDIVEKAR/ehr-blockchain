"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = require("mongoose");
const baseschema_1 = require("../../utils/baseschema");
const userSchema = new baseschema_1.BaseSchema({
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
        ref: "societies",
    },
    hospitalId: {
        type: mongoose_1.Types.ObjectId,
        ref: "hospitals"
    },
    insauranceId: {
        type: mongoose_1.Types.ObjectId,
        ref: "insaurances"
    }
});
exports.userModel = (0, mongoose_1.model)("user", userSchema);
//# sourceMappingURL=user.schema.js.map
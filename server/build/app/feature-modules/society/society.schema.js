"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.societyModel = void 0;
const mongoose_1 = require("mongoose");
const baseschema_1 = require("../../utils/baseschema");
const sociteySchema = new baseschema_1.BaseSchema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        area: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        pinCode: {
            type: Number,
            required: true
        }
    },
    contact: {
        type: Number,
        required: true
    },
    hospitalId: {
        type: mongoose_1.Types.ObjectId,
        ref: "hospitals",
        required: true
    }
});
exports.societyModel = (0, mongoose_1.model)("society", sociteySchema);
//# sourceMappingURL=society.schema.js.map
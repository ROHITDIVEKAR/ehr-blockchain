"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.societyModel = void 0;
const mongoose_1 = require("mongoose");
const baseschema_1 = require("../../utils/baseschema");
const societySchema = new baseschema_1.BaseSchema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
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
    }
});
exports.societyModel = (0, mongoose_1.model)("society", societySchema);
//# sourceMappingURL=society.schema.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
exports.Role = {
    ADMIN: process.env.ROLE_SUPER_ADMIN || "",
    HOSPITAL_ADMIN: process.env.ROLE_HOSPITAL_ADMIN || "",
    SOCIETY_ADMIN: process.env.ROLE_SOCIETY_ADMIN || "",
    USER: process.env.ROLE_USER || "",
    DOCTOR: process.env.ROLE_DOCTOR || ""
};
//# sourceMappingURL=constant.js.map
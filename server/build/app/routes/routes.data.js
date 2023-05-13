"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludedPaths = exports.allRoutes = void 0;
const rotes_type_1 = require("./rotes.type");
const feature_modules_1 = __importDefault(require("../feature-modules"));
const validate_token_1 = require("../utils/validate-token");
exports.allRoutes = [
    new rotes_type_1.Route('/auth', feature_modules_1.default.AuthRouter),
];
exports.excludedPaths = [
    new validate_token_1.ExcludedPath("/auth/login", "POST"),
    new validate_token_1.ExcludedPath("/auth/register", "POST")
];
//# sourceMappingURL=routes.data.js.map
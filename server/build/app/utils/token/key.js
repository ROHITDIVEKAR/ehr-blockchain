"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPublicKey = exports.getPrivateKey = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
function getPrivateKey() {
    const Path = path_1.default.resolve(__dirname, "..", "key", "private.pem");
    return (0, fs_1.readFileSync)(Path, "utf8");
}
exports.getPrivateKey = getPrivateKey;
function getPublicKey() {
    const Path = path_1.default.resolve(__dirname, "..", "key", "public.pem");
    return (0, fs_1.readFileSync)(Path, "utf8");
}
exports.getPublicKey = getPublicKey;
//# sourceMappingURL=key.js.map
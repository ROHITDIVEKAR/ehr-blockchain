"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const key_1 = require("./key");
const tokenConfig = {
    algorithm: "RS256"
};
const generateToken = (payload) => {
    const privatekey = (0, key_1.getPrivateKey)();
    const token = (0, jsonwebtoken_1.sign)(payload, privatekey, tokenConfig);
    return token;
};
exports.generateToken = generateToken;
const verifyToken = (payload) => {
    const publicKey = (0, key_1.getPublicKey)();
    return (0, jsonwebtoken_1.verify)(payload, publicKey);
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=token.js.map
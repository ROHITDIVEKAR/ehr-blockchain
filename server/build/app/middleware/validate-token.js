"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
const token_1 = require("../utils/token/token");
const validateToken = (req, res, next) => {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        if (!token)
            throw { statusCode: 400, message: "Invalid Token" };
        const a = (0, token_1.verifyToken)(token);
        console.log(a);
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.validateToken = validateToken;
//# sourceMappingURL=validate-token.js.map
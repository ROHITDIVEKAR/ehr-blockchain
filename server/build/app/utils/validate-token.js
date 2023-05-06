"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcludedPath = exports.authorize = void 0;
const token_1 = require("./token/token");
const authorize = (excludedPaths) => {
    return (req, res, next) => {
        try {
            if (excludedPaths.find(e => e.path === req.url && e.method === req.method))
                return next();
            const token = req.headers.authorization;
            if (!token)
                return next({ message: 'UNAUTHORIZED', statusCode: 401 });
            const data = (0, token_1.verifyToken)(token);
            if (data)
                res.locals.user = data;
            next();
        }
        catch (e) {
            next({ message: 'UNAUTHORIZED', statusCode: 401 });
        }
    };
};
exports.authorize = authorize;
class ExcludedPath {
    constructor(path, method) {
        this.path = path;
        this.method = method;
    }
}
exports.ExcludedPath = ExcludedPath;
//# sourceMappingURL=validate-token.js.map
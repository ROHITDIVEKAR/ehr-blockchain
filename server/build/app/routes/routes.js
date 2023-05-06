"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const express_1 = require("express");
const response_handler_1 = require("../utils/response.handler");
const validate_token_1 = require("../utils/validate-token");
const routes_data_1 = require("./routes.data");
const registerRoutes = (app) => {
    app.use((0, express_1.json)());
    app.use((0, validate_token_1.authorize)(routes_data_1.excludedPaths));
    for (let route of routes_data_1.allRoutes) {
        app.use(route.path, (req, res, next) => {
            next();
        }, route.router);
    }
    app.use((err, req, res, next) => {
        res.status(err.statusCode || 500).send(new response_handler_1.ResponseHandler(null, err));
    });
};
exports.registerRoutes = registerRoutes;
//# sourceMappingURL=routes.js.map
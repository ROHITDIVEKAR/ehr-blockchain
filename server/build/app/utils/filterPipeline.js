"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FILTER_PRODUCT_VALIDATOR = exports.genratePipeline = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("./validate");
const genratePipeline = (query) => {
    const { sort, sortDirection, page, limit } = query, filter = __rest(query, ["sort", "sortDirection", "page", "limit"]);
    const pipeline = [];
    for (const feild in filter) {
        if (Array.isArray(filter[feild])) {
            const matchStage = {
                $match: {
                    [feild]: { $in: filter[feild] }
                }
            };
            pipeline.push(matchStage);
        }
        else if (typeof filter[feild] == "object") {
            const stage = {};
            for (const [operator, operand] of Object.entries(filter[feild])) {
                stage[`$${operator}`] = Number(operand);
            }
            pipeline.push({ $match: { [feild]: stage } });
        }
        else {
            if (Number.isInteger(filter[feild]))
                filter[feild] = Number(filter[feild]);
            pipeline.push({
                $match: {
                    [feild]: filter[feild]
                }
            });
        }
    }
    const sortObj = {};
    if (sort) {
        sortObj[sort] = sortDirection === ("asc" || 1) ? 1 : -1;
        pipeline.push({ $sort: sortObj });
    }
    pipeline.push({
        $facet: {
            totalCount: [{ $count: "totalResults" }],
            paginetResult: [
                { $skip: (((Number(page) - 1) || 0) * (Number(limit) || 10)) },
                { $limit: Number(limit) || 10 },
            ]
        }
    });
    return pipeline;
};
exports.genratePipeline = genratePipeline;
exports.FILTER_PRODUCT_VALIDATOR = [
    (0, express_validator_1.query)("price.gt").optional().isInt().withMessage("price gt must be number"),
    (0, express_validator_1.query)("price.gte").optional().isInt().withMessage("price gte must be number"),
    (0, express_validator_1.query)("price.lt").optional().isInt().withMessage("price lt must be number"),
    (0, express_validator_1.query)("price.lte").optional().isInt().withMessage("price lte must be number"),
    (0, express_validator_1.query)("threshold.gt").optional().isInt().withMessage("threshold gt must be number"),
    (0, express_validator_1.query)("threshold.gte").optional().isInt().withMessage("threshold gte must be number"),
    (0, express_validator_1.query)("threshold.lt").optional().isInt().withMessage("threshold lt must be number"),
    (0, express_validator_1.query)("threshold.lte").optional().isInt().withMessage("threshold lte must be number"),
    (0, express_validator_1.query)("points.gt").optional().isInt().withMessage("points gt must be number"),
    (0, express_validator_1.query)("points.gte").optional().isInt().withMessage("points gte must be number"),
    (0, express_validator_1.query)("points.lt").optional().isInt().withMessage("points lt must be number"),
    (0, express_validator_1.query)("points.lte").optional().isInt().withMessage("points lte must be number"),
    (0, express_validator_1.query)("name").optional().isString().withMessage("product name should be string"),
    (0, express_validator_1.query)("ownerId").optional().isString().withMessage("product ownerId should be string"),
    (0, express_validator_1.query)("reward").optional().isString().withMessage("product reward should be string"),
    (0, express_validator_1.query)("quantity.gt").optional().isInt().withMessage("quantity gt must be number"),
    (0, express_validator_1.query)("quantity.gte").optional().isInt().withMessage("quantity gte must be number"),
    (0, express_validator_1.query)("quantity.lt").optional().isInt().withMessage("quantity lt must be number"),
    (0, express_validator_1.query)("quantity.lte").optional().isInt().withMessage("quantity lte must be number"),
    (0, express_validator_1.query)("status").optional().isString().withMessage("product status should be string"),
    (0, express_validator_1.query)("limit").optional().isInt().withMessage("limit shoul be number"),
    (0, express_validator_1.query)("page").optional().isInt().withMessage("page shoul be number"),
    (0, express_validator_1.query)("sortDirection").optional().isAlphanumeric().withMessage("sortDirection shoul be number"),
    (0, express_validator_1.query)("sort").optional().isAlphanumeric().withMessage("product sort should be string"),
    validate_1.validate
];
//# sourceMappingURL=filterPipeline.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSteps = exports.steps = void 0;
const joi_1 = __importDefault(require("joi"));
exports.steps = joi_1.default.object({
    title: joi_1.default.string().required(),
    description: joi_1.default.array().items(joi_1.default.object().keys({
        title: joi_1.default.string(),
        description: joi_1.default.string().required(),
    })),
    image: joi_1.default.string().required(),
    position: joi_1.default.number().required(),
});
exports.createSteps = joi_1.default.object({
    body: joi_1.default.object().required(),
});

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = __importStar(require("joi"));
const { password } = require("./custom.validation");
const register = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        userName: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().required().email(),
        age: Joi.number().required(),
    }),
};
const login = {
    body: Joi.object().keys({
        password: Joi.string().required(),
        email: Joi.string().required().email(),
    }),
};
const logout = {
    body: Joi.object().keys({
        refreshToken: Joi.string().required(),
    }),
};
const refreshTokens = {
    body: Joi.object().keys({
        refreshToken: Joi.string().required(),
    }),
};
const forgotPassword = {
    body: Joi.object().keys({
        email: Joi.string().email().required(),
        code: Joi.string().length(4).required(),
    }),
};
const resetPassword = {
    body: Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required().custom(password),
    }),
};
const verifyEmail = {
    query: Joi.object().keys({
        token: Joi.string().required(),
    }),
};
exports.default = {
    register,
    login,
    logout,
    refreshTokens,
    forgotPassword,
    resetPassword,
    verifyEmail,
};

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveStep = exports.getSteps = void 0;
const step_model_1 = __importDefault(require("../models/step.model"));
const getSteps = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield step_model_1.default.find({}).sort({ createdAt: -1 });
});
exports.getSteps = getSteps;
const saveStep = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield step_model_1.default.create([payload]);
    return response[0];
});
exports.saveStep = saveStep;

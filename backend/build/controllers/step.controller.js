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
exports.createSteps = exports.getPublicSteps = void 0;
const http_status_1 = __importDefault(require("http-status"));
const steps_service_1 = require("../services/steps.service");
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
exports.getPublicSteps = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const steps = yield (0, steps_service_1.getSteps)();
    res.status(http_status_1.default.OK).send({ data: { steps }, message: "Success" });
}));
exports.createSteps = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, body } = req;
    if (!body.title || !body.image || body.description.length === 0) {
        res.status(422).send({
            message: "There must be a title , description and image for a step",
        });
        return;
    }
    body["user"] = user._id;
    const response = yield (0, steps_service_1.saveStep)(body);
    res.status(http_status_1.default.OK).send({ response, message: "Success" });
}));

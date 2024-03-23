"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const stepSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    description: [
        {
            title: { type: String, required: false },
            description: { type: String, required: true },
        },
    ],
    image: { type: String, required: true },
    position: { type: Number, require: true },
}, { timestamps: true });
const Step = (0, mongoose_1.model)("Step", stepSchema);
exports.default = Step;

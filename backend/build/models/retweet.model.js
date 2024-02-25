"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const reTweetSchema = new mongoose_1.Schema({
    tweet: { type: mongoose_1.Schema.Types.ObjectId, ref: "Tweet", required: true },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });
const ReTweet = (0, mongoose_1.model)("ReTweet", reTweetSchema);
exports.default = ReTweet;

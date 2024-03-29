"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const ThreadsSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    creator_id: { type: String, required: true },
    creator_name: { type: String, required: true },
    movie_id: { type: String, required: true },
    discussion_box: { type: Object, required: true },
}, { timestamps: true });
exports.default = mongoose_1.default.model("Threads", ThreadsSchema);

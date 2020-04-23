"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var article_routes_1 = __importDefault(require("./routes/article.routes"));
var app = express_1.default();
dotenv_1.default.config();
app.use('/api', article_routes_1.default);
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("App has been started on port " + PORT);
});

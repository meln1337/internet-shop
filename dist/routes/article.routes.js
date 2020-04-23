"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var articles_json_1 = __importDefault(require("../articles.json"));
var router = express_1.Router();
router.get('/articles', function (req, res) {
    res.json(articles_json_1.default);
});
router.get('/articles/:id', function (req, res) {
    var article = articles_json_1.default.find(function (article) { return article.id === req.params.id; });
    res.json(article);
});
exports.default = router;

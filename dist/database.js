"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'spykespyke',
    database: 'internetshop',
    port: 8080
});

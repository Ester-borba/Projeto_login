"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
// Criamos uma conexão com o banco MySQL
exports.db = promise_1.default.createPool({
    host: "localhost",
    user: "root",
    password: "Esterswag122", // 👉 coloque aqui a senha do seu MySQL (se tiver)
    database: "login_db",
});

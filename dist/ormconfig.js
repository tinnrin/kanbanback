"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({
    path: path_1.default.join(__dirname, '.env'),
});
const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT, POSTGRES_HOST } = process.env;
//const LOCAL_URL = `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`;
const LOCAL_URL = `postgres://kanban_uq32_user:zO6NMVsSMGzAVWGEAJftKFcN1AuR0f6x@dpg-cok15nmd3nmc73c5n650-a.frankfurt-postgres.render.com/kanban_uq32`
exports.default = {
    type: 'postgres',
    cache: false,
    url: process.env.DATABASE_URL || LOCAL_URL,
    synchronize: false,
    logging: false,
    ssl: {
        rejectUnauthorized: false,
    },
    entities: ['src/resources/**/**.entity{.ts,.js}'],
    migrations: ['./migrations/*.ts'],
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//External Imports
const vitest_1 = require("vitest");
const supertest_1 = __importDefault(require("supertest"));
//Internal Imports
const main_1 = require("../src/main");
//Setup the Route Tests
(0, vitest_1.describe)("Routes", async () => {
    //Test the User Get Endpoint with no Data
    (0, vitest_1.it)("GET /user", async () => {
        //Get the Response
        const response = await (0, supertest_1.default)(main_1.app).get("/user");
        //Check if the Status Code is Correct
        (0, vitest_1.expect)(response.statusCode).toBeGreaterThanOrEqual(400);
        (0, vitest_1.expect)(response.statusCode).toBeLessThanOrEqual(499);
    });
    //Test the User Get Endpoint with Valid Data
    (0, vitest_1.it)("GET /user?username=vercel", async () => {
        //Get the Response
        const response = await (0, supertest_1.default)(main_1.app).get("/user?username=vercel");
        //Check if the Status Code is Correct
        (0, vitest_1.expect)(response.statusCode).toBe(200);
    });
    //Test the Users Get Endpoint with no Data
    (0, vitest_1.it)("GET /users", async () => {
        //Get the Response
        const response = await (0, supertest_1.default)(main_1.app).get("/users");
        //Check if the Status Code is Correct
        (0, vitest_1.expect)(response.statusCode).toBeGreaterThanOrEqual(400);
        (0, vitest_1.expect)(response.statusCode).toBeLessThanOrEqual(499);
    });
    //Test the Users Get Endpoint with Valid Data
    (0, vitest_1.it)("GET /users?username=vercel", async () => {
        //Get the Response
        const response = await (0, supertest_1.default)(main_1.app).get("/users?username=vercel");
        //Check if the Status Code is Correct
        (0, vitest_1.expect)(response.statusCode).toBe(200);
    });
});

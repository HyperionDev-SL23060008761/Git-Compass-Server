//External Imports
import { test, expect, describe, it } from "vitest";
import request from "supertest";

//Internal Imports
import { app } from "../src/main";

//Setup the Route Tests
describe("Routes", async () => {
	//Test the User Get Endpoint with no Data
	it("GET /user", async () => {
		//Get the Response
		const response = await request(app).get("/user");

		//Check if the Status Code is Correct
		expect(response.statusCode).toBeGreaterThanOrEqual(400);
		expect(response.statusCode).toBeLessThanOrEqual(499);
	});

	//Test the User Get Endpoint with Valid Data
	it("GET /user?username=vercel", async () => {
		//Get the Response
		const response = await request(app).get("/user?username=vercel");

		//Check if the Status Code is Correct
		expect(response.statusCode).toBe(200);
	});

	//Test the Users Get Endpoint with no Data
	it("GET /users", async () => {
		//Get the Response
		const response = await request(app).get("/users");

		//Check if the Status Code is Correct
		expect(response.statusCode).toBeGreaterThanOrEqual(400);
		expect(response.statusCode).toBeLessThanOrEqual(499);
	});

	//Test the Users Get Endpoint with Valid Data
	it("GET /users?username=vercel", async () => {
		//Get the Response
		const response = await request(app).get("/users?username=vercel");

		//Check if the Status Code is Correct
		expect(response.statusCode).toBe(200);
	});
});

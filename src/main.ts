//External Imports
import express from "express";
import { green, blue } from "picocolors";
import cors from "cors";
import helmet from "helmet";

//Internal Imports
import { router } from "./router/router";
import { connect } from "./database";

//Setup the Environment
require("dotenv").config();

//Connect to the Database
//connect();

//Setup the Express App
const app = express();

//Setup the Helmet Middleware
app.use(helmet());

//Setup the CORS Middleware
app.use(cors());

//Setup the Body Parser Middleware
app.use(express.json());

//Setup the Router Middleware
app.use(router);

//Start the Express Server
app.listen(process.env.Port, () => {
	console.log(`\n${green("Server is running on port")} ${blue(process.env.Port)}`);
});

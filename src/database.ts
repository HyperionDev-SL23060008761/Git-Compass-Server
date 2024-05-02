//Internal Imports
import mongoose, { ConnectOptions } from "mongoose";

//Connects to the Database
export async function connect() {
	//check if the Mongo Host is Invalid
	if (!process.env.MongoHost) throw new Error("Invalid Mongo Host environment variable");

	//Setup the Connection String
	const mongoUri = `mongodb://${process.env.MongoHost}:${process.env.MongoPort}`;

	//Setup the Connection Data
	const connectionOptions: ConnectOptions = {
		authSource: "admin",
		authMechanism: "SCRAM-SHA-256",
		dbName: process.env.MongoDatabase,
		auth: {
			username: process.env.MongoUser,
			password: process.env.MongoPassword,
		},
	};

	//Connect to the Database
	mongoose
		.connect(mongoUri, connectionOptions)
		.then(() => console.log("Connected to MongoDB"))
		.catch(err => console.error("Error connecting to MongoDB", err));
}

//External Imports
import { NextFunction, Request, Response } from "express";

//Internal Imports
import { getGitUser } from "../../../utils";

//Export the Endpoints Function
export default async function (req: Request, res: Response, next: NextFunction) {
	//Get the Username from the Query Parameters
	const username = req.query.username as string;

	//Check if no username was provided
	if (!username) return res.status(417).send({ error: "Username is Required" });

	//Get the User from Github
	const user = await getGitUser(username);

	//Check if the User could not be Found
	if (!user) return res.status(404).send({ error: "User Not Found" });

	//Return the User List
	return res.status(200).json(user);
}

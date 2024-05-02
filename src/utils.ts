//External Imports
import { Octokit } from "octokit";
import { Repository, Organization } from "@octokit/webhooks-types";

//Internal Imports
import { UserCache, UserData } from "./types/types";

//Setup a New User Cache
const userCache = new UserCache();

//Setup Octokit
const octokit = new Octokit();

//Returns the Requested user from Git Hub with the Matching Username
export async function getGitUser(username: string): Promise<UserData | null> {
	//Get the Requested User from the User Cache
	const cachedUser = userCache.findUser(username);

	//Check if the User Exists in the Cache and return the User
	if (cachedUser) return cachedUser;
	console.log("Fetching New User");

	//Send an Octokit Request
	const response = await octokit.request(`GET /users/${username}`).catch(err => null);

	//Check if the User Could not be Found
	if (!response || !isInRange(response.status, 200, 299)) return null;

	//Check if the Response Data is Empty
	if (!response.data) return null;

	//Get the User from the Response Data (Type Narrowing It)
	const user: UserData = response.data;

	//Get and Update the User's List of Repositories
	user.repositories = await getRepositoriesForUser(user);

	//Get and Update the User's List of Organizations
	user.organizations = await getOrganizationsForUser(user);

	//Add the User to the User Cache
	userCache.addUser(user);

	//Return the User
	return user;
}

//Returns the List of users from Git Hub with the Matching Username
export async function getGitUserList(username: string): Promise<Array<UserData> | null> {
	//Send an Octokit Request
	const response = await octokit.request(`GET /search/users?q=${username}`).catch(err => null);

	//Check if the User Could not be Found
	if (!response || !isInRange(response.status, 200, 299)) return null;

	//Check if the Response Data is Empty
	if (!response.data || response.data.total_count < 1) return null;

	//Get the User from the Response Data (Type Narrowing It)
	const user: Array<UserData> = response.data.items;

	//Return the User
	return user;
}

//Returns the List of Repositories from Git Hub for the User with the Matching Username
async function getRepositoriesForUser(user: UserData): Promise<Array<Repository> | null> {
	//Check if the User is a bot and Return Null
	if (user.type == "Bot") return null;

	//Get the Type of the User
	const userType = user.type == "User" ? "users" : "orgs";

	//Send an Octokit Request
	const response = await octokit.request(`GET /${userType}/${user.login}/repos`).catch(err => null);

	//Check if the Repositories Could not be Found
	if (!response || !isInRange(response.status, 200, 299)) return null;

	//Check if the Response Data is Empty
	if (!response.data) return null;

	//Get the Repositories from the Response Data (Type Narrowing It)
	const repositories: Array<Repository> = response.data;

	//Return the Repositories
	return repositories;
}

//Returns the List of Organizations from Git Hub for the User with the Matching Username
async function getOrganizationsForUser(user: UserData): Promise<Array<Organization> | null> {
	//Check if the User is not a User
	if (user.type !== "User") return null;

	//Send an Octokit Request
	const response = await octokit.request(`GET /users/${user.login}/orgs`).catch(err => null);

	//Check if the Organizations Could not be Found
	if (!response || !isInRange(response.status, 200, 299)) return null;

	//Check if the Response Data is Empty
	if (!response.data) return null;

	//Get the Organizations from the Response Data (Type Narrowing It)
	const organizations: Array<Organization> = response.data;

	//Return the Organizations
	return organizations;
}

//Checks if a Number is Within a Range
export function isInRange(number: number, min: number, max: number): boolean {
	//Return the Result
	return number >= min && number <= max;
}

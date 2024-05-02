//Internal Imports
import { UserData } from "../types";

//Setup the User Cache Class
export class UserCache {
	//List of Users in the Cache
	private users: { [username: string]: UserData } = {};

	//Add a User to the Cache
	public addUser(user: UserData): void {
		//Add the User to the Cache
		this.users[user.login.toLowerCase()] = user;

		//Setup the Timeout to Remove the User from the Cache
		setTimeout(() => {
			delete this.users[user.login.toLowerCase()];
		}, 1000 * 60 * 60);
	}

	//Find a User in the Cache
	public findUser(username: string): UserData | undefined {
		//Find the User in the Cache
		const user = this.users[username.toLowerCase()];

		//Return the User if it Exists
		return user;
	}
}

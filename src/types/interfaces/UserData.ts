//External Imports
import { User, Repository, Organization } from "@octokit/webhooks-types";

//Export the Interface
export interface UserData extends User {
	bio: string | null;
	blog: string;
	company: string | null;
	created_at: string;
	followers: number;
	following: number;
	hireable: boolean;
	location: string | null;
	organizations?: Array<Organization> | null;
	public_gists: number;
	public_repos: number;
	repositories?: Array<Repository> | null;
	twitter_username: string | null;
	updated_at: string;
}

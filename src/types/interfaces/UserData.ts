//External Imports
import { User, Organization } from "@octokit/webhooks-types";

//Internal Imports
import { RepositoryData } from "../types";

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
	repositories?: Array<RepositoryData> | null;
	twitter_username: string | null;
	updated_at: string;
}

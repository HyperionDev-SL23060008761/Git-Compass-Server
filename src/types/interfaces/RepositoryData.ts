//External Imports
import { Repository, Commit } from "@octokit/webhooks-types";

//Export the Interface
export interface RepositoryData extends Repository {
	commits: Array<Commit> | null;
}

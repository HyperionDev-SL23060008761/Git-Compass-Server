# GitCompass Server

This is a Server that allows you to get data from the Github API Regarding a User

## Requirements

- Bun v 1.x OR npm 10.x
- Node v 20.x

## Installation

### Using Bun:

- Install the Required Modules

  ```bash
    bun install
  ```

- Build the project

  ```bash
    bun run build
  ```

- Start the Project

  ```bash
    bun run start
  ```

### Using NPM:

- Install the Required Modules

  ```bash
    npm install
  ```

- Build the project

  ```bash
    npm run build
  ```

- Start the Project

  ```bash
    npm run start
  ```

## Usage:

#### Requests can be made to the Endpoint using the Host URL http://localhost:3000 Followed by the Requested Endpoint (Please see the list of Available Endpoints Below).

#### Postman Collection for this Server: https://documenter.getpostman.com/view/34013771/2sA3JFCkXa

### Available Endpoints

| Method | Endpoint | Description                                                     | Parameters                             | Returns |
| ------ | -------- | --------------------------------------------------------------- | -------------------------------------- | ------- |
| GET    | /user    | Returns a User with their List of Repos, Orgs, and Repo Commits | **Query:** username (string, REQUIRED) | User    |
| GET    | /users   | Returns a List of Users (Without Repo, Orgs or Commits)         | **Query:** username (string, REQUIRED) | User[]  |

## User Object

```ts
interface User {
	avatar_url: string;
	bio: string | null;
	blog: string;
	company: string | null;
	created_at: string;
	email?: string | null;
	events_url: string;
	followers: number;
	followers_url: string;
	following: number;
	following_url: string;
	gists_url: string;
	gravatar_id: string;
	hireable: boolean;
	html_url: string;
	id: number;
	location: string | null;
	login: string;
	name?: string;
	node_id: string;
	organizations?: Array<Organization> | null;
	organizations_url: string;
	public_gists: number;
	public_repos: number;
	received_events_url: string;
	repositories?: Array<RepositoryData> | null;
	repos_url: string;
	site_admin: boolean;
	starred_url: string;
	subscriptions_url: string;
	twitter_username: string | null;
	type: "Bot" | "User" | "Organization";
	updated_at: string;
	url: string;
}
```

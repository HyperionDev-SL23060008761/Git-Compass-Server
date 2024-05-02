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

#### Postman Collection for this Server: https://documenter.getpostman.com/view/34013771/2sA3Bq4WLQ

### Available Endpoints

| Method | Endpoint | Description                                                  | Parameters                                                                                                                         | Returns         |
| ------ | -------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| GET    | /api     | Returns a list of all cars in the database                   | None                                                                                                                               | Car[]           |
| GET    | /cars    | Returns a list of all cars, or a specific car if ID provided | **Query:** id (string, OPTIONAL)                                                                                                   | Car or Car[]    |
| POST   | /cars    | Creates a new car                                            | **Query:** id (string, REQUIRED) <br/> **JSON Body:** make (string, REQUIRED), model (string, REQUIRED), seats (integer, REQUIRED) | Created Car     |
| PUT    | /cars    | Updates an existing car, changing its ID                     | **Query:** id (string, REQUIRED) <br/> **JSON Body:** make (string, OPTIONAL), model (string, OPTIONAL), seats (integer, OPTIONAL) | New ID (string) |
| DELETE | /cars    | Deletes the car with the specified ID                        | **Query:** id (string, REQUIRED)                                                                                                   | Nothing         |

### Explanation of Returns

- **Car[]:** Indicates an array (list) of car objects.
- **Car:** A single car object:

### Car Object:

```typescript
interface Car {
	id: string;
	make: string;
	model: string;
	seats: number;
}
```

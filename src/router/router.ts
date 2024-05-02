//Internal Importws
import { NextFunction, Request, Response } from "express";
import { EndpointManager, RateLimit, RequestMethod } from "../types/types";

//Setup the Rate Limiter
//const rateLimiter = new RateLimit();

//Setup the Endpoint Manager
const endpointManager = new EndpointManager(`${__dirname}/routes`);

//Setup the Router
export function router(req: Request, res: Response, next: NextFunction) {
	//Get the Request's IP
	const requestIP = req.hostname;
	/*
	//Get the Rate Limit Status for the Request IP
	const isRateLimited = rateLimiter.isRateLimited(requestIP);

	//Check if the Request is Rate Limited and Return with a 429
	if (isRateLimited) return res.sendStatus(429);
*/
	//Get the Request Method
	const requestMethod = req.method.toLowerCase() as RequestMethod;

	//Check if this is not a Support Request Method and Return with a 405
	if (!(requestMethod in RequestMethod)) return res.sendStatus(405);

	//Get the Ruquest Path
	const requestPath = req.path;

	//Get the Requested Endpoint from the Endpoint Manager
	const requestedEndpoint = endpointManager.getEndpoint(requestMethod, requestPath);

	//Check if the Requested Endpoint does not exist and return a 404
	if (!requestedEndpoint) return res.sendStatus(404);

	//Run the Requested Endpoint's Handler
	requestedEndpoint.handler(req, res, next);
}

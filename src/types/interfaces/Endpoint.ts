//Internal Imports
import { EndpointHandler, RequestMethod } from "../types";

//Setup the Endpoint Interface
export interface Endpoint {
	method: RequestMethod;
	path: string;
	handler: EndpointHandler;
}

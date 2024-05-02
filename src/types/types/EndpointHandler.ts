//External Imports
import { Request, Response, NextFunction } from "express";

//Setup the Endpoint Handler Type
export type EndpointHandler = (req: Request, res: Response, next: NextFunction) => void;

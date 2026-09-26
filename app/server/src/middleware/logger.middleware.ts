import { Request, Response, NextFunction } from "express";

export const logger = (
    req: Request, 
    res: Response, 
    next: NextFunction): void => {
    const time = new Date().toISOString();

    console.log(`Got a ${req.method} from ${req.url} at ${time}`);
    
    next();

}
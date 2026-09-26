import { NextFunction, Request, Response } from "express"
import { validationResult } from "express-validator"


export const validateInput = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        
        return res.status(401).json({
            success: false,
            message: "Invalid Input",
            data: errors.array()
        })
    }
    next();
}
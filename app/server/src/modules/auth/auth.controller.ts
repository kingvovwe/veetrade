import { loginService } from "./auth.service"
import { Request, Response } from "express";
import { TLoginReqData, TLoginRes } from "./auth.types";


export const loginController = async (
    req: Request, 
    res: Response
) => {

    const data: TLoginReqData = req.body;

    const result: TLoginRes = await loginService(data);

    res.status(result.status).json(result.jsonRes);

}

export const registerController = async (
    req: Request,
    res: Response
) => {

}


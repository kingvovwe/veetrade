import { loginService, registerService } from "./auth.service"
import { Request, Response } from "express";
import { TLoginReqData, TLoginRes, TRegisterReqData, TRegisterRes } from "./auth.types";
import { createAuthTokens } from "./auth.helper";

import { accessCookieOptions, refreshCookieOptions } from "./auth.helper";

export const loginController = async (
    req: Request, 
    res: Response
) => {

    try {

        const data: TLoginReqData = req.body;

        const result: TLoginRes = await loginService(data);

        
        if (result.jsonRes.success) {

            const { userId, isEmailVerified } = result.jsonRes.data;
            
            const { accessToken, refreshToken } = createAuthTokens(userId, isEmailVerified);

            res.cookie('accessToken', accessToken, accessCookieOptions);
            res.cookie('refreshToken', refreshToken, refreshCookieOptions);
            
        }

        res.status(result.status).json(result.jsonRes);



    } catch (e) {
        res.status(400).json({
            success: false,
            message: "Error trying to Login",
            data: e
        });
    }
}

export const registerController = async (
    req: Request,
    res: Response
) => {
    try {

        const data: TRegisterReqData = req.body;
        console.log("Controller data:  ", req.body);
        
        const result: TRegisterRes = await registerService(data);

        
        if (result.jsonRes.success) {
            console.log("Success");
            const { userId, isEmailVerified } = result.jsonRes.data;
            
            const { accessToken, refreshToken } = createAuthTokens(userId, isEmailVerified);

            res.cookie('accessToken', accessToken, accessCookieOptions);
            res.cookie('refreshToken', refreshToken, refreshCookieOptions);
            
        }

        res.status(result.status).json(result.jsonRes);



    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            message: "Error trying to Register",
            data: e
        });
    }
}


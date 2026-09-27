import { loginService, registerService } from "./auth.service"
import { NextFunction, Request, Response } from "express";
import { TLoginReqData, TLoginRes, TRegisterReqData, TRegisterRes } from "./auth.types";
import { createAuthTokens } from "./auth.helper";

import { accessCookieOptions, refreshCookieOptions } from "./auth.helper";


const _setCookie = (res: Response, userId: string) => {
    const { accessToken, refreshToken } = createAuthTokens(userId);


    res.cookie('accessToken', accessToken, accessCookieOptions);
    res.cookie('refreshToken', refreshToken, refreshCookieOptions);
      
}


export const loginController = async (
    req: Request, 
    res: Response
) => {

    try {

        const data: TLoginReqData = req.body;

        const result: TLoginRes = await loginService(data);

        
        if (result.jsonRes.success) {

            const { userId } = result.jsonRes.data;
            
            _setCookie(res, userId);
            
        }

        res.status(result.status).json(result.jsonRes);



    } catch (e: unknown) {

        if(e instanceof Error) {
            res.status(400).json({
                success: false,
                message: "Error trying to Login",
                data: e.message
            });
            return;
        }

        res.status(500).json({
            success: false,
            message: "Unexpected Error Occured",
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
        
        const result: TRegisterRes = await registerService(data);

        
        if (result.jsonRes.success) {
            console.log("Success");
            const { userId } = result.jsonRes.data;
            
            _setCookie(res, userId);
            
        }

        res.status(result.status).json(result.jsonRes);



    } catch (e) {
        console.log(e);

        if(e instanceof Error) {
            res.status(400).json({
                success: false,
                message: "Error trying to Register",
                data: e.message
            });

            return;
        }

        res.status(500).json({
            success: false,
            message: "Unexpected Error Occured",
            data: e
        });
    }
}

export const sendOTPController = async (
    req: Request,
    res: Response
) => {

}



export const verifyEmailOTP = async (
    req: Request,
    res: Response
) => {
    try {



    } catch (e: unknown) {

        console.error(e);

        if(e instanceof Error) {
            res.status(400).json({
                success: false,
                message: "Error trying to Verify Email",
                data: e.message
            });

            return;
        }

        
        res.status(500).json({
            success: false,
            message: "Unexpected Error Occured",
            data: e
        });


    }
}


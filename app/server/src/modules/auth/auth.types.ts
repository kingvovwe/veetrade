import { TResponse } from "../../types/response.type";


export type TJwtPaylod = {
    userId: string;
}

export type TAuthResData = TJwtPaylod;

export type TLoginRes = TResponse<TAuthResData>;
export type TRegisterRes = TResponse<TAuthResData>;
export type TSendOTPRes = TResponse<null>;
export type TVerifyOTPRes = TResponse<null>;

export type TLoginReqData = {
    email: string;
    password: string;
}

export type TRegisterReqData = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

export type TSendOTPReqData = {
    email: string;
}

export type TVerifyOTPReqData = {
    email: string;
    otpCode: string;
}

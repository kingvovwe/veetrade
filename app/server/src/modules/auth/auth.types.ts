import { TResponse } from "../../types/response.type";


export type TJwtPaylod = {
    userId: string;
    isEmailVerified: boolean;
}

export type TAuthResData = TJwtPaylod;

export type TLoginRes = TResponse<TAuthResData>;
export type TRegisterRes = TResponse<TAuthResData>;


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

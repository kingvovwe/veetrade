import { TResponse } from "../../types/response.type";

export type TLoginResData = {
    userId: string;
    email: string;
}

export type TLoginRes = TResponse<TLoginResData>;


export type TLoginReqData = {
    email: string;
    password: string;
}

export type TRegisterReqData = {
    name: string;
    email: string;
    password: string;

}
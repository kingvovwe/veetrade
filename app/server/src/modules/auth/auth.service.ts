import { TResponse } from "../../types/response.type";
import { TLoginReqData, TLoginRes, TRegisterReqData } from "./auth.types";


export const loginService = async (data: TLoginReqData): Promise<TLoginRes> => {
    

    
    
    return {
        status: 200,
        jsonRes: {
            success: false,
            message: "Hello",
            data: {
                userId: "",
                email: ""
            }
        }
    }
}


export const registerService = async (data: TRegisterReqData): Promise<TLoginRes> => {
    
    
    
    
    return {
        status: 200,
        jsonRes: {
            success: false,
            message: "Hello",
            data: {
                userId: "",
                email: ""
            }
        }
    }
}
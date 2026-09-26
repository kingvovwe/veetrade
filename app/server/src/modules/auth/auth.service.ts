import { SUser } from "../../models/user.model";
import { TLoginReqData, TLoginRes, TRegisterReqData, TRegisterRes } from "./auth.types";


import { hash, compare } from 'bcrypt'




export const loginService = async (data: TLoginReqData): Promise<TLoginRes> => {
    
    const { email, password } = data;

    const user = await SUser.findOne({ email });

    if(!user) {
        return {
            status: 401,
            jsonRes: {
                success: false,
                message: "Incorrect Details",
                data: {
                    userId: "",
                    isEmailVerified: false
                }
            }
        }
    }

    const isPasswordCorrect = await compare(password, user.password);

    if(!isPasswordCorrect) {
        return {
            status: 401,
            jsonRes: {
                success: false,
                message: "Incorrect Details",
                data: {
                    userId: "",
                    isEmailVerified: false
                }
            }
        }
    }

    user.lastLoginAt = new Date();
    await user.save();

    
    return {
        status: 200,
        jsonRes: {
            success: true,
            message: `Welcome Back ${user.firstname}`,
            data: {
                userId: user._id.toString(),
                isEmailVerified: user.emailVerified
            }
        }
    }
}


export const registerService = async (data: TRegisterReqData): Promise<TRegisterRes> => {
    
    console.log(data);
    const { firstname, lastname, email, password } = data;

    const hashedPassword = await hash(password, 10);

    const user = await SUser.create({
        firstname,
        lastname,
        email,
        password: hashedPassword,
        lastLoginAt: new Date()
    });

    if(!user) {
        return {
            status: 401,
            jsonRes: {
                success: false,
                message: "Failed to Register User",
                data: {
                    userId: "",
                    isEmailVerified: false
                }
            }
        }
    }
    
    
    
    return {
        status: 201,
        jsonRes: {
            success: true,
            message: "Registration successful",
            data: {
                userId: user._id.toString(),
                isEmailVerified: user.emailVerified
            }
        }
    }
}
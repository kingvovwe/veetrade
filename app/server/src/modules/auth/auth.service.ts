import { SUser } from "../../models/user.model";
import { genOTPCode } from "./auth.helper";
import { sendLoginWelcomeEmail, sendRegisterWelcomeEmail, sendVerifyEmailOTP } from "./auth.mail";
import { TLoginReqData, TLoginRes, TRegisterReqData, TRegisterRes, TSendOTPReqData, TSendOTPRes, TVerifyOTPReqData, TVerifyOTPRes } from "./auth.types";


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
                    userId: ""
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
                    userId: ""
                }
            }
        }
    }

    user.lastLoginAt = new Date();
    await user.save();

    await sendLoginWelcomeEmail(user.email, user.firstname);

    
    return {
        status: 200,
        jsonRes: {
            success: true,
            message: `Welcome Back ${user.firstname}`,
            data: {
                userId: user._id.toString()
            }
        }
    }
}


export const registerService = async (data: TRegisterReqData): Promise<TRegisterRes> => {
    
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
                    userId: ""
                }
            }
        }
    }

    await sendRegisterWelcomeEmail(user.email, user.firstname);
    
    
    
    return {
        status: 201,
        jsonRes: {
            success: true,
            message: "Registration successful",
            data: {
                userId: user._id.toString()
            }
        }
    }
}

export const sendOTPService = async (data: TSendOTPReqData): Promise<TSendOTPRes> => {
    
    const email = data.email;

    const user = await SUser.findOne({ email });

    if(!user) {
        return {
            status: 404,
            jsonRes: {
                success: false,
                message: "Email Not Found",
                data: null
            }
        }
    }

    const otpCode: string = genOTPCode();

    const expirationDate = new Date();

    expirationDate.setMinutes(expirationDate.getMinutes() + 15);

    const currDate = new Date();

    user.otpCode = otpCode;
    user.expirationDate = expirationDate;


    await user.save();

    await sendVerifyEmailOTP(email, otpCode);


    return {
        status: 200,
        jsonRes: {
            success: true,
            message: `OTP Sent to your Email`,
            data: null
        }
    }

    

}


export const verifyEmailOTPService = async (data: TVerifyOTPReqData): Promise<TVerifyOTPRes> => {
    
    const { email, otpCode } = data;

    const user = await SUser.findOne({ email });


    if(!user) {
        return {
            status: 404,
            jsonRes: {
                success: false,
                message: "Email Not Found",
                data: null
            }
        }
    }

    if(user.otpCode !== otpCode) {
        return {
            status: 404,
            jsonRes: {
                success: false,
                message: "Wrong OTP",
                data: null
            }
        }
    }

    const currDate = new Date();

    if(!user.expirationDate || currDate >= user.expirationDate){
        return {
            status: 400,
            jsonRes: {
                success: false,
                message: "OTP Expired. Send a new One.",
                data: null
            }
        }
    }

    user.otpCode = "";
    user.expirationDate = undefined;

    await user.save();


    return {
        status: 200,
        jsonRes: {
            success: true,
            message: `Email verified`,
            data: null
        }
    }
}
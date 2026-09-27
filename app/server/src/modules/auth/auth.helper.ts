import { CookieOptions } from "express";

import { TJwtPaylod } from "./auth.types";
import { NODE_ENV, JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } from "../../config/env.config";

import jwt from "jsonwebtoken"
import crypto from "crypto"

const isProd = NODE_ENV === "production";


export const cookieOptions: CookieOptions = {
  httpOnly: true,
  secure: isProd,
  sameSite: isProd ? "none" : "lax",
  path: "/"
};

export const accessCookieOptions: CookieOptions = {
  ...cookieOptions,
  maxAge: 15 * 60 * 1000
};

export const refreshCookieOptions: CookieOptions = {
  ...cookieOptions,
  maxAge: 7 * 24 * 60 * 60 * 1000
};


export const genToken = (
  payload: TJwtPaylod, 
  secret: string, 
  expiresIn: jwt.SignOptions["expiresIn"]
): string => {
    return jwt.sign(payload, secret, {
        expiresIn
    })
}

export const verifyToken = (token: string, secret: string) => {
    return jwt.verify(token, secret);
}


export const createAuthTokens = (
    userId: string
) => {
    const jwtPayload: TJwtPaylod = {
        userId
    }

    const accessToken = genToken(jwtPayload, JWT_ACCESS_SECRET!, "15m");
    const refreshToken = genToken(jwtPayload, JWT_REFRESH_SECRET!, "7d");

    return {
      accessToken, refreshToken
    }
}



export const genOTPCode = (): string => {
    return crypto.randomInt(100000, 1000000).toString();
}


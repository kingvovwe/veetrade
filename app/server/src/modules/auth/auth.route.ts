import { Router } from "express";
import { body } from "express-validator"


import { loginController, registerController } from "./auth.controller";
import { validateInput } from "../../middleware/validation.middleware";


const authRoute = Router();

authRoute.post(
    '/login',
    body('email').notEmpty().withMessage("Please Insert Email"),
    body('password').isLength({ min: 6 }).withMessage("Please enter valid Password"),
    validateInput,
    loginController
);

authRoute.post(
    '/register',
    body('firstname').notEmpty().withMessage("Please Insert First Name"),
    body('lastname').notEmpty().withMessage("Please Insert Last Name"),
    body('email').notEmpty().withMessage("Please Insert Email"),
    body('password').notEmpty().isLength({ min: 6 }).withMessage("Password must be more than 6 characters"),
    // body('password').isLength({ min: 6 }).withMessage("Password must be more than 6 characters"),
    validateInput,
    registerController
);



export default authRoute;
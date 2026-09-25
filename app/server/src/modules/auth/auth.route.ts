import { Router } from "express";
import { loginController } from "./auth.controller";


const authRoute = Router();

authRoute.post('/login', loginController)



export default authRoute;
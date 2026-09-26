import express from "express"
import route from "./route/route";

import { API_PREFIX } from "./config/env.config";

import cookieParser from "cookie-parser"
import { logger } from "./middleware/logger.middleware";


const app = express();

app.use(express.json());

app.use(logger);
app.use(`${API_PREFIX}`, route);
app.use(cookieParser());


export default app;
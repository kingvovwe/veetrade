import express from "express"
import route from "./route/route";


const app = express();

app.use(route);


export default app;
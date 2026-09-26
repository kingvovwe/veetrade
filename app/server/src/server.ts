import app from "./app";
import { connectDB } from "./config/db.config";
import { PORT } from "./config/env.config";

(async () => {
    
    try{
        await connectDB();
        app.listen(PORT, () => {
            console.log("Server Started on port: ", PORT);
        });
    } catch (e) {
        console.log("failed to start app");
        process.exit(1);
    }

})()


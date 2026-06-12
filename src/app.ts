import express , {Request,Response,Application}from "express";
import cors from "cors";

const app : Application = express();

app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));


app.get('/',(req : Request,res:Response)=>{
    res.json({
        success:"true",
        message:"server is running"
    })
});
export default app;

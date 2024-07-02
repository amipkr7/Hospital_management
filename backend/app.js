import express, { urlencoded } from 'express'
import {config} from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import { dbConnection } from './database/database.js';
import messageRouter from './router/messageRouter.js'
import { errorMiddleware } from './middlwares/error.js';
import userRouter from './router/userRouter.js'
import appointmentRouter from './router/appointmentRouter.js';

const app=express();
config({path:"./config/config.env"})

// app.use(cors({
//     origin:[process.env.FRONTEND_URL,process.env.DASHBOARD_URL],
//     methods:['GET','POST','DELETE','PUT'],
//     credentials:true
// }))

app.use(cors());

app.use(cookieParser()); 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'/tmp/'
}))

app.get("/health",async(req,res)=>{
    res.send({
        message:"Helath OK!"
    });
});
app.use('/api/v1/message',messageRouter);
app.use('/api/v1/user',userRouter);
app.use('/app/v1/appointment',appointmentRouter);

dbConnection();

app.use(errorMiddleware);

export default app

import express from 'express';
import cors  from  'cors';
import dotenv   from  'dotenv'
import cookieParser  from  'cookie-parser';
import helmet from 'helmet'
import morgan from 'morgan';
import connectMongo from './config/mongodbConect.js';
import ResponseInterceptor from './middleware/ResponseInterceptor.middleware.js';
import userRoute from './routes/user.route.js'
import ErrorMiddleware from './middleware/ErrorMiddleware.middleware.js';
dotenv.config();
const app = express();

app.use(cors({credentials:true,origin:process.env.FRONT_URL}));
app.use(express.json());
app.use(cookieParser());
// app.use(morgan());
morgan(':method :url :status :res[content-length] - :response-time ms')
app.use(helmet({crossOriginResourcePolicy:false}))



// Response Intercepter 
app.use(ResponseInterceptor)

app.get('/',(req,res)=>{
    res.json({message:"server start..."});
})


// @@ routes
app.use("/user",userRoute)

app.all("*",(req,res)=>{
    res.status(404).json({
        status:false,
        method:req.method,
        message: `Route ${req.originalUrl} not found`,
    })
})

app.use(ErrorMiddleware)
connectMongo().then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  });
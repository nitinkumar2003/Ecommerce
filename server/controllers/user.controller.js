import AsyncMiddleware from '../middleware/Async.middleware.js';
import createActivationToken from "../utils/ActivationToken.util.js";
import DecodeJwtToken from "../utils/DecodeJwtToken.utils.js";
import ErrorHandler from "../utils/ErrorHandler.util.js";
import sendEmail from "../utils/SendEmail.util.js";
import userModel from "../models/user.model.js";
import encodeJwtToken from "../utils/EncodeJwtToken.util.js";

export const registerUserController = AsyncMiddleware(
    async (req, res, next) => {
        const { email, name, password } = req.body;
        const user = await userModel.findOne({ email });
        console.log("useruser", user, email)
        // return;
        if (user) {
            return next(new ErrorHandler("Email already exists. Please try loggin in.", 409))
        }

        const activateToken = createActivationToken({ name, email, password });
        const data = {
            user: { name },
            url: `${process.env.FRONT_URL}/verify-email?code=${activateToken}`,
        }
        await sendEmail({
            email: email,
            subject: "Activate your account",
            template: "activation-mail.ejs",
            data,
        })

        return res.status(201).json({
            message: `Please check your mail : ${email} to activate your account`,
            data: `${process.env.FRONT_URL}/verify-email?code=${activateToken}`,
        })
    }
)

export const activeUserController = AsyncMiddleware(
    async (req, res, next) => {
        const user = DecodeJwtToken(req.query.token);
        console.log("user", user);
        if (!user) {
            return next(new ErrorHandler(
                "Invalid or expired token. Please try again or request a new one.",
                401
            ))
        }

        const data = await userModel.create(user);
        return res.json({
            message: 'User activated successfully',
            data,
        })
    }
)

export const loginUserController=AsyncMiddleware(
   async (req,res,next)=>{
        const {email,password}=req.body;
        const user=await userModel.findOne({email});
        console.log('user',user)
        // const user = await userModel.findOne({ email }).select("+password");
  
    }
)
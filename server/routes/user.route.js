import {Router} from 'express';
import { activeUserController, loginUserController, registerUserController } from '../controllers/user.controller.js';
import ValidateMiddleware from '../middleware/Validate.middleware.js';
import { userRegisterSchema,userLoginSchema } from '../schema/user.schema.js';

const router=Router();

router.post('/register',ValidateMiddleware(userRegisterSchema),registerUserController);
router.post('/activate',activeUserController);
router.post('/login',ValidateMiddleware(userLoginSchema),loginUserController)

export default router;
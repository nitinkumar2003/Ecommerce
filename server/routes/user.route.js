import {Router} from 'express';
import { registerUserController } from '../controllers/user.controller.js';
import ValidateMiddleware from '../middleware/Validate.middleware.js';
import { userRegisterSchema } from '../schema/user.schema.js';

const router=Router();

router.post('/register',ValidateMiddleware(userRegisterSchema),registerUserController);


export default router;
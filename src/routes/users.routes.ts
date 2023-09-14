import express from 'express';
import { userController } from '../controllers';
import loginBodyValidation from '../middlewares/loginBodyValidation';

const userRoute = express.Router();

userRoute.post('/login', loginBodyValidation, userController.login);

export default userRoute;
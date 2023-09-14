import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../database/models/user.model';
import { LoginReturn } from '../types/ServiceReturns';

const login = async (
  { username,
    password: passwordFromRequest,
  }: { username: string; password: string },
): Promise<LoginReturn> => {
  const user = await UserModel.findOne({ where: { username } });
  if (user) {
    const isPasswordCorrect = await bcryptjs.compare(passwordFromRequest, user.toJSON().password);
    if (!isPasswordCorrect) {
      return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
    }
    const { password, ...payload } = user.toJSON();
    const token = jwt.sign(payload, 'SECRETO', { expiresIn: '1h' });
    return { status: 'SUCCESSFUL', data: { token } };
  }
  return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
};

export default {
  login,
};
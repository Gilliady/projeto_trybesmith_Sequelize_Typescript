import { Request, Response } from 'express';
import { userService } from '../services';
import mapStatusToHTTP from '../utils/mapStatusToHTTP';

const login = async (req: Request, res: Response): Promise<void> => {
  const { status, data } = await userService.login(req.body);
  res.status(mapStatusToHTTP(status)).json(data);
};

export default {
  login,
};
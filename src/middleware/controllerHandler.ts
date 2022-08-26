import { NextFunction, Request, RequestHandler, Response } from 'express';
import { HttpStatusCode } from '../errors/types';
import { Callback, RES_STATUS, RES_DATA, ApiResponse } from './types';

export const controllerHandler = (
  controller: Callback,
  httpStatusCode: HttpStatusCode = HttpStatusCode.OK
): RequestHandler => {
  return async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await controller(res.locals);

      if (data instanceof Error) return next(data);

      (<ApiResponse>res)[RES_STATUS] = httpStatusCode;
      (<ApiResponse>res)[RES_DATA] = data;

      return next();
    } catch (error) {
      next(error);
    }
  };
};

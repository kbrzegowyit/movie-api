import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../errors/CustomError';
import { HttpStatusCode, HttpResponseMessages } from '../errors/types';
import { RES_DATA, RES_STATUS } from './types';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    (<any>res)[RES_STATUS] = err.code;
    (<any>res)[RES_DATA] = err.message;
  } else {
    (<any>res)[RES_STATUS] = HttpStatusCode.INTERNAL_SERVER_ERROR;
    (<any>res)[RES_DATA] = HttpResponseMessages.INTERNAL_SERVER_ERROR;
  }
  next();
};

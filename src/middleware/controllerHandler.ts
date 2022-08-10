import { NextFunction, Request, RequestHandler, Response } from "express";
import { HttpStatusCode } from "../errors/types";
import { Callback, RES_STATUS, RES_DATA, ApiResponse } from "./types";

export const controllerHandler = (controller: Callback): RequestHandler => {
    return async (_req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await controller({} as any);

            if (data instanceof Error) return next(data);
            
            (<ApiResponse>res)[RES_STATUS] = HttpStatusCode.OK;
            (<ApiResponse>res)[RES_DATA] = data;
            
            return next();
        } catch (error) {
            next(error);
        }
    }
}
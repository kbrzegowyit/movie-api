import { NextFunction, Request, RequestHandler } from "express";
import { ApiResponse, RES_STATUS, RES_DATA } from "./types";

export const responseHandler = function (_req: Request, res: ApiResponse, next: NextFunction) {
    res.status(res[RES_STATUS]).json(res[RES_DATA]);
    next();
} as RequestHandler;
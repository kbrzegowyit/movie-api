import { Response } from "express";

export interface Callback {
    (...args: any[]): any,
};

export const RES_STATUS = Symbol('response_status');
export const RES_DATA = Symbol('response_data');

export interface ApiResponse extends Response {
    [RES_STATUS]: number,
    [RES_DATA]: any;
}
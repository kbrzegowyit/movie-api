import { CustomError } from "./CustomError";
import { HttpResponseMessages, HttpStatusCode } from "./types";

export class ValidationError extends CustomError {
    constructor() {
        super(HttpStatusCode.BAD_REQUEST, HttpResponseMessages.VALIDATION_ERROR, '');
    }
}
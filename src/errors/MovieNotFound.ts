import { CustomError } from './CustomError';
import { HttpResponseMessages, HttpStatusCode } from './types';

export class MovieNotFound extends CustomError {
  constructor() {
    super(HttpStatusCode.NOT_FOUND, HttpResponseMessages.NOT_FOUND_ERROR, '');
  }
}

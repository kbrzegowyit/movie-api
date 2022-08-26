import Ajv from 'ajv';
import { NextFunction, Request, Response } from 'express';
import { ValidationError } from '../errors/ValidationError';
import { ParsedParams } from './types';

export const requestValidator = (schema: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (schema.body) {
        const isValid = isRequestValid(req.body, schema.body);

        if (!isValid) throw new ValidationError();

        res.locals.body = req.body;
      }

      if (schema.params) {
        const parsedParams = parseParamsIds(req.params);

        const isValid = isRequestValid(parsedParams, schema.params);

        if (!isValid) throw new ValidationError();

        res.locals.params = parsedParams;
      }

      if (schema.query) {
        const isValid = isRequestValid(req.query, schema.query);

        if (!isValid) throw new ValidationError();

        res.locals.query = req.query;
      }
      next();
    } catch (err) {
      next(err);
    }
  };
};

const isRequestValid = (requestData: any, scheam: any) => {
  const ajv = new Ajv();

  const validate = ajv.compile(scheam);

  return validate(requestData);
};

const parseParamsIds = (params: any): ParsedParams => {
  let parsedParams: ParsedParams = {};

  for (const key in params) {
    parsedParams[key] = parseInt(params[key]);
  }

  return parsedParams;
};

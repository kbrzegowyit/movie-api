import { MovieType } from './movie.model';

export const MOVIE_ADD_SCHEMA = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      nullable: false,
    },
    type: {
      enum: Object.values(MovieType),
    },
  },
  required: ['name', 'type'],
  additionalProperties: false,
};

export const MOVIE_UPDATE_SCHEMA = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      nullable: false,
    },
    type: {
      enum: Object.values(MovieType),
    },
  },
  required: [],
  additionalProperties: false,
};

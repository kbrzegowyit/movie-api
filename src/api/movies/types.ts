import { Movie } from './movie.model';

export type MovieData = Omit<Movie, 'id'>;

export interface MovieParamsIdLocals {
  params: {
    id: number;
  };
}

export interface MovieDataLocals {
  body: MovieData;
  params: {
    id: number;
  };
}

export interface UpdateMovieData {
  id: number;
  data: MovieData;
}

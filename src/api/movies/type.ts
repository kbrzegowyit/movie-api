import { Movie } from "./movies.model";

export type UpdateMovie = Pick<Movie, 'name' | 'type'>; 
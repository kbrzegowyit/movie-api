import { DeleteResult, UpdateResult } from "typeorm";
import { Movie } from "./movie.model";
import { MovieService } from "./movie.service";
import { MovieDataLocals, MovieParamsIdLocals } from "./types";

export class MovieController {
    constructor(private movieService: MovieService) {}

    public addMovie = async (locals: MovieDataLocals): Promise<Movie> => {
        return this.movieService.addMovie(locals.body);
    }

    public getAllMovies = async (): Promise<Movie[]> => {
        return this.movieService.getAllMovies();
    }

    public getMovieById = async (locals: MovieParamsIdLocals): Promise<Movie | null> => {
        return this.movieService.getMovieById(locals.params.id);
    }

    public updateMovieById = async (locals: MovieDataLocals): Promise<Movie> => {
        return this.movieService.updateMovieById(locals.params.id, locals.body);
    }

    public deleteMovieById = async (locals: MovieParamsIdLocals): Promise<DeleteResult> => {
        return this.movieService.deleteMovieById(locals.params.id);
    }
}
import { Movie } from "./movies.model";
import { MovieService } from "./movies.service";
import { UpdateMovie } from "./type";

export class MovieController {
    constructor(private movieService: MovieService) {}

    public addMovie = async (movie: Movie) => {
        return this.movieService.addMovie(movie);
    }

    public getAllMovies = async (_locals: any): Promise<Movie[]> => {
        return this.movieService.getAllMovies();
    }

    public getMovieById = async (id: number) => {
        return this.movieService.getMovieById(id);
    }

    public updateMovieById = async (id: number, data: UpdateMovie) => {
        return this.movieService.updateMovieById(id, data);
    }

    public deleteMovieById = async (id: number) => {
        return this.movieService.deleteMovieById(id);
    }
}
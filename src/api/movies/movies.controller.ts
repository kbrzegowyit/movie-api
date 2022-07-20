import { Movie } from "./movies.model";
import { MovieService } from "./movies.service";
import { UpdateMovie } from "./type";

export class MovieController {
    constructor(private movieService: MovieService) {}

    public addMovie = async (movie: Movie) =>  this.movieService.addMovie(movie);

    public getAllMovies = async () => this.movieService.getAllMovies();

    public getMovieById = async (id: number) => this.movieService.getMovieById(id);

    public updateMovieById = async (id: number, data: UpdateMovie) => this.movieService.updateMovieById(id, data);

    public deleteMovieById = async (id: number) => this.movieService.deleteMovieById(id);
}
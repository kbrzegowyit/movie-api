import { Movie } from "./movies.model";
import { MovieRepository } from "./movies.repository";
import { UpdateMovie } from "./type";

export class MovieService {
    constructor(private movieRepository: MovieRepository) {}

    public addMovie = async (movie: Movie) => this.movieRepository.addMovie(movie);

    public getAllMovies = async () => this.movieRepository.getAllMovies();

    public getMovieById = async (id: number) => this.movieRepository.getMovieById(id);

    public updateMovieById = async (id: number, data: UpdateMovie) => this.movieRepository.updateMovieById(id, data);

    public deleteMovieById = async (id: number) => this.movieRepository.deleteMovieById(id);
}
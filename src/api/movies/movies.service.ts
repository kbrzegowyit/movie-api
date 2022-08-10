import { Movie } from "./movies.model";
import { MovieRepository } from "./movies.repository";
import { UpdateMovie } from "./type";

export class MovieService {
    constructor(private movieRepository: MovieRepository) {}

    public addMovie = async (movie: Movie) => {
        return this.movieRepository.addMovie(movie);
    }

    public getAllMovies = async () => {
        return this.movieRepository.getAllMovies();
    }

    public getMovieById = async (id: number) => {
        return this.movieRepository.getMovieById(id);
    }

    public updateMovieById = async (id: number, data: UpdateMovie) => {
        return this.movieRepository.updateMovieById(id, data);
    }

    public deleteMovieById = async (id: number) => {
        return this.movieRepository.deleteMovieById(id);
    }
}
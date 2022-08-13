import { DeleteResult } from "typeorm";
import { MovieNotFound } from "../../errors/MovieNotFound";
import { Movie } from "./movie.model";
import { MovieRepository } from "./movie.repository";
import { MovieData, UpdateMovieData } from "./types";

export class MovieService {
    constructor(private movieRepository: MovieRepository) {}

    public addMovie = async (data: MovieData) => {
        return this.movieRepository.addMovie(data);
    }

    public getAllMovies = async () => {
        return this.movieRepository.getAllMovies();
    }

    public getMovieById = async (id: number): Promise<Movie> => {
        const movie = await this.movieRepository.getMovieById(id);
        
        if (!movie) throw new MovieNotFound();
        
        return movie;
    }

    public updateMovieById = async (id: number, data: MovieData): Promise<Movie> => {
        return (await this.movieRepository.updateMovieById(id, data)).raw as Movie;
    }

    public deleteMovieById = async (id: number): Promise<DeleteResult> => {
        return this.movieRepository.deleteMovieById(id);
    }
}
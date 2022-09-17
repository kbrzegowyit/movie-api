import { MovieNotFound } from "../../errors/MovieNotFound";
import { MovieType } from "./movie.model";
import { MovieService } from "./movie.service";

enum MockMovieName {
    THE_TEST = 'The test',
    THE_TEST_2 = 'The test 2',
};

enum MockMovieDirector {
    DEVELOPER = 'Developer',
};

describe('MovieService', () => {
    const movieRepository = {
        addMovie: jest.fn(),
        getAllMovies: jest.fn(),
        getMovieById: jest.fn(),
        updateMovieById: jest.fn(),
        deleteMovieById: jest.fn(),
    };

    const movieService = new MovieService(movieRepository as any);

    const movieDatabase = [
        {
            id: 1,
            name: MockMovieName.THE_TEST,
            director: MockMovieDirector.DEVELOPER,
            type: MovieType.ACTION,
        },
        {
            id: 2,
            name: MockMovieName.THE_TEST_2,
            director: MockMovieDirector.DEVELOPER,
            type: MovieType.ACTION,
        },
    ];

    beforeEach(() => jest.resetAllMocks());

    describe('.addMovie()', () => {
        const inputMovie = {
            name: MockMovieName.THE_TEST,
            director: MockMovieDirector.DEVELOPER,
            type: MovieType.ACTION,
        };
        
        const ouptuMovie = { ...inputMovie, id: 1 };

        it('should add a new movie', async () => {
            movieRepository.addMovie.mockResolvedValue(ouptuMovie);
            await expect(movieService.addMovie(inputMovie)).resolves.toEqual(ouptuMovie);
        });
        
        it('should throw an error when movie repository failed', async () => {
            movieRepository.addMovie.mockRejectedValue(new Error());
            await expect(movieService.addMovie(inputMovie)).rejects.toThrow();
        }); 
    });

    describe('.getAllMovies()', () => {
        it('should return all movies', async () => {
            movieRepository.getAllMovies.mockResolvedValue(movieDatabase);
            await expect(movieService.getAllMovies()).resolves.toEqual(movieDatabase);
        });

        it('should throw an error when movie repository fails', async () => {
            movieRepository.getAllMovies.mockRejectedValue(new Error());
            await expect(movieService.getAllMovies()).rejects.toThrow();
        });
    });

    describe('.getMovieById()', () => {
        it('should return the movie', async () => {
            const moiveId = 1;
            const returnedMovie = movieDatabase.find(movie => movie.id === moiveId);
            movieRepository.getMovieById.mockResolvedValue(returnedMovie);
            await expect(movieService.getMovieById(moiveId)).resolves.toEqual(returnedMovie);
        });

        it('should throw an error when there is no movie with the id', async () => {
            const movieId = movieDatabase.length;
            movieRepository.getMovieById.mockReturnValue(null);
            await expect(movieService.getMovieById(movieId)).rejects.toThrowError(MovieNotFound);
        });

        it('should throw an error when movie repository fails', async () => {
            const movieId = 1;
            movieRepository.getAllMovies.mockRejectedValue(new Error());
            await expect(movieService.getMovieById(movieId)).rejects.toThrow();
        });
    });

    describe('.updateMovieById()', () => {
        const movieId = 3;
        const updatedMovieData = { 
            name: MockMovieName.THE_TEST_2,
            director: MockMovieDirector.DEVELOPER,
            type: MovieType.ACTION,
        };
        const updatedMovie = {
            raw: [{
                ...updatedMovieData,
                id: movieId,
            }],
        };

        it('should update the movie', async () => {
            movieRepository.updateMovieById.mockReturnValue(Promise.resolve(updatedMovie));
            const result = await movieService.updateMovieById(movieId, updatedMovieData);
            expect(result).toEqual(updatedMovie.raw[0]);
        });

        it('should throw an error when movie repository fails', async () => {
            movieRepository.updateMovieById.mockRejectedValue(new Error());
            await expect(movieService.updateMovieById(movieId, updatedMovieData)).rejects.toThrow();
        });
    });

    describe('.deleteMovieById()', () => {
        it('should delete the movie', async () => {
            const movieId = 1;
            movieRepository.deleteMovieById.mockResolvedValue({});
            expect(movieService.deleteMovieById(movieId)).resolves.toEqual({});
        });

        it('should throw an error when movie repository fails', async () => {
            const movieId = 1;
            movieRepository.deleteMovieById.mockRejectedValue(new Error());
            expect(movieService.deleteMovieById(movieId)).rejects.toThrow();
        });
    });
});
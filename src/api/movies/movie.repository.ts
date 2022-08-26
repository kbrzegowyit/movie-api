import { DataSource, DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Movie } from './movie.model';
import { MovieData } from './types';

export class MovieRepository extends Repository<Movie> {
  constructor(private dataSource: DataSource) {
    super(Movie, dataSource.createEntityManager());
  }

  public addMovie = async (data: MovieData): Promise<Movie> => {
    return this.save(data);
  };

  public getAllMovies = async (): Promise<Movie[]> => {
    return this.find({ order: { name: 'DESC' } });
  };

  public getMovieById = async (id: number): Promise<Movie | null> => {
    return this.findOne({ where: { id: id } });
  };

  public updateMovieById = async (id: number, data: MovieData): Promise<UpdateResult> => {
    return this.createQueryBuilder().update(data).where({ id }).returning('*').execute();
  };

  public deleteMovieById = async (id: number): Promise<DeleteResult> => {
    return this.delete(id);
  };
}

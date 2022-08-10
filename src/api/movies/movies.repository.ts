import { DataSource, Repository} from "typeorm";
import { Movie } from "./movies.model";
import { UpdateMovie } from "./type";

export class MovieRepository extends Repository<Movie> {
    constructor(private dataSource: DataSource) {
        super(Movie, dataSource.createEntityManager()) 
    }

    public addMovie = async (movie: Movie) => {
        return this.save(movie);
    }

    public getAllMovies = async () => {
        return this.find({ order: { name: "DESC" }});
    }

    public getMovieById = async (id: number) => {
        return this.find({ where: { id: id }});
    }

    public updateMovieById = async (id: number, data: UpdateMovie) => {
        return this.createQueryBuilder()
            .update({ ...data })
            .where({ id })
            .returning('*')
            .execute();
    } 

    public deleteMovieById = async (id: number) => {
        return this.delete(id);
    }
}
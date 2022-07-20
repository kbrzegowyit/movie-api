import { DataSource, Repository} from "typeorm";
import { Movie } from "./movies.model";
import { UpdateMovie } from "./type";

export class MovieRepository extends Repository<Movie> {
    constructor(private dataSource: DataSource) {
        super(Movie, dataSource.createEntityManager()) 
    }

    public addMovie = async (movie: Movie) => this.save(movie);

    public getAllMovies = async () => this.find({ order: { name: "DESC" }});

    public getMovieById = async (id: number) => this.find({ where: { id: id }});

    public updateMovieById = async (id: number, data: UpdateMovie) => 
    this.createQueryBuilder()
        .update({ ...data })
        .where({ id })
        .returning('*')
        .execute();

    public deleteMovieById = async (id: number) => this.delete(id);
}
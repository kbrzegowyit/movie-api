import { Router } from "express";
import { MovieController } from "../api/movies/movies.controller";
import { Movie, MovieType } from "../api/movies/movies.model";
import { MovieService } from "../api/movies/movies.service";
import { UpdateMovie } from "../api/movies/type";
import { ID, ROOT } from "./route.constants";

export class MoviesRouter {
    public readonly router: Router;

    constructor(private movieController: MovieController) {
        const movieRouter = Router();

        movieRouter.post(ROOT, async (req, res) => {
            const movie = new Movie();
            movie.name = req.body.name;
            movie.type = req.body.type;
            
            const result = await movieController.addMovie(movie);
            res.send(result);
        });

        movieRouter.get(ROOT, async (_, res) => {
            const result = await movieController.getAllMovies();
            res.send(result);
        });

        movieRouter.get(ID, async (req, res) => {
            const result = await movieController.getMovieById(req.params.id as unknown as number);
            res.send(result);
        });

        movieRouter.patch(ID, async (req, res) => {
            const id = req.params.id as unknown as number;
            const data = req.body;
            
            const result = await movieController.updateMovieById(id, data);
            res.send(result);
        });

        movieRouter.delete(ID, async (req, res) => {
            const id = req.params.id as unknown as number;
            
            const result = await movieController.deleteMovieById(id);
            res.send(result);
        });

        this.router = movieRouter;
    }
}
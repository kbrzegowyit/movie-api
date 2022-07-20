import { Router } from "express";
import { ControllersFactory } from "../controllers.factory";
import { MoviesRouter } from "./movies.router";
import { MOVIE_ROUTE_MODIFIERS } from "./route.constants";

export class MainRouter {
    public readonly router: Router;

    constructor(private controllersFactory: ControllersFactory) {
        const mainRouter = Router();

        const movieRouter = new MoviesRouter(controllersFactory.controllers.movieController).router;

        mainRouter.use(MOVIE_ROUTE_MODIFIERS.MOVIES, movieRouter);

        this.router = mainRouter;
    }
}

import { Any } from "typeorm";
import { MovieController } from "./api/movies/movies.controller";
import { ServicesFactory } from "./services.factory";

export interface Controllers {
    movieController: MovieController;
}

export class ControllersFactory {
    public readonly controllers: Controllers;

    constructor(private servicesFactory: ServicesFactory) {
        const movieController = new MovieController(servicesFactory.services.movieService);

        this.controllers = {
            movieController,
        }
    }
}
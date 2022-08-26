import { MovieController } from './api/movies/movie.controller';
import { ServicesFactory } from './services.factory';

export interface Controllers {
  movieController: MovieController;
}

export class ControllersFactory {
  public readonly controllers: Controllers;

  constructor(private servicesFactory: ServicesFactory) {
    const movieController = new MovieController(servicesFactory.services.movieService);

    this.controllers = {
      movieController,
    };
  }
}

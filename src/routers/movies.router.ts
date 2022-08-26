import { Router } from 'express';
import { MovieController } from '../api/movies/movie.controller';
import { HttpStatusCode } from '../errors/types';
import { controllerHandler } from '../middleware/controllerHandler';
import { requestValidator } from '../middleware/requestValidator';
import { SCHEMAS } from '../schemas/types';
import { ID, ROOT } from './route.constants';

export class MoviesRouter {
  public readonly router: Router;

  constructor(private movieController: MovieController) {
    const movieRouter = Router();

    movieRouter.post(
      ROOT,
      requestValidator({ body: SCHEMAS.BODY.MOVIE_ADD_SCHEMA }),
      controllerHandler(movieController.addMovie, HttpStatusCode.CREATED)
    );

    movieRouter.get(ROOT, controllerHandler(movieController.getAllMovies));

    movieRouter.get(
      ID,
      requestValidator({ params: SCHEMAS.PARAMS.PARAM_ID }),
      controllerHandler(movieController.getMovieById)
    );

    movieRouter.patch(
      ID,
      requestValidator({ params: SCHEMAS.PARAMS.PARAM_ID, body: SCHEMAS.BODY.MOVIE_UPDATE_SCHEMA }),
      controllerHandler(movieController.updateMovieById)
    );

    movieRouter.delete(
      ID,
      requestValidator({ params: SCHEMAS.PARAMS.PARAM_ID }),
      controllerHandler(movieController.deleteMovieById, HttpStatusCode.NO_CONTENT)
    );

    this.router = movieRouter;
  }
}

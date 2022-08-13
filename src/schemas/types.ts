import { MOVIE_ADD_SCHEMA, MOVIE_UPDATE_SCHEMA } from "../api/movies/movie.schema";
import { PARAM_ID } from "./params.schema";

export const SCHEMAS = {
    BODY: {
        MOVIE_ADD_SCHEMA: MOVIE_ADD_SCHEMA,
        MOVIE_UPDATE_SCHEMA: MOVIE_UPDATE_SCHEMA,
    },
    PARAMS: {
        PARAM_ID,
    },
    QUERY: {},
}

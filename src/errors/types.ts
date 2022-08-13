export enum HttpStatusCode {
    OK = 200,
    CREATED = 201,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}

export enum HttpResponseMessages {
    INTERNAL_SERVER_ERROR = 'There is internal server error.',
    VALIDATION_ERROR = 'There is validation request error.',
    NOT_FOUND_ERROR = 'There is no such movie',
}

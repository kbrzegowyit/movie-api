# Movies REST API

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
![[License]](https://badgen.net/github/license/micromatch/micromatch)
![GitHub last commit](https://img.shields.io/github/last-commit/kbrzegowyit/movie-rest-api)

This project is a RESTful API for managing movies. It allows users to perform CRUD operations (Create, Read, Update, Delete) on movie data.

## Features

- Create a new movie
- Retrieve a list of all movies
- Retrieve details of a specific movie
- Update movie information
- Delete a movie

## Technologies Used

- Node.js
- Express.js
- PostgreSQL

## Getting Started

To get started with the Movies REST API using Docker, follow these steps:

1. Clone the repository: ```sh git clone https://github.com/your-username/movies-rest-api.git```
2. Install Docker on your machine if you haven't already.
3. Run ```sh docker compose up``` in the project directory.
4. Access the API at `http://localhost:3000`.

- `GET /movies`: Get a list of all movies
- `GET /movies/:id`: Get details of a specific movie
- `POST /movies`: Create a new movie
- `PUT /movies/:id`: Update movie information
- `DELETE /movies/:id`: Delete a movie

## Getting Started for Developers

To get started with the Movies REST API as a developer, follow these steps:

1. Clone the repository: ```sh git clone https://github.com/your-username/movies-rest-api.git```
2. Install Node.js and npm on your machine if you haven't already.
3. Install project dependencies by running ```sh npm install``` in the project directory.
5. Run ```sh docker compose up``` in the project directory .
6. Run the API server by executing ```sh npm run build:watch``` and ```sh npm run start:dev```.
7. Access the API at `http://localhost:3000`.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
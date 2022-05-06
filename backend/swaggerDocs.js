const swaggerDocs = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "Movie API",
    description: "Videothek",
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT",
    },
  },
  host: "localhost:4000",
  basePath: "/movies",
  tags: [
    {
      name: "Movies",
      description: "movies in the database",
    },
    {
      name: "Directors",
      description: "Directors in the database",
    },
    {
      name: "Genres",
      description: "Genres in the database",
    },
  ],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
    "/movies": {
      get: {
        tags: ["Movies"],
        summary: "Get all Movies in the system",
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/MovieOkResponse",
            },
          },
          400: {
            description: "Bad Request",
            schema: {
              $ref: "#/definitions/BadRequest",
            },
          },
        },
      },
    },
    "/movies/{id}": {
      get: {
        tags: ["Movies"],
        summary: "Get a specific movie by id",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Id of the movie searched for",
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/MovieOkResponse",
            },
          },
          400: {
            description: "Bad Request",
            schema: {
              $ref: "#/definitions/BadRequest",
            },
          },
        },
      },
    },
    "/search/{movieName}": {
      get: {
        tags: ["Movies"],
        summary: "Get a specific movie by name",
        parameters: [
          {
            name: "name",
            in: "path",
            description: "Name of the movie searched for",
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/MovieOkResponse",
            },
          },
          400: {
            description: "Bad Request",
            schema: {
              $ref: "#/definitions/BadRequest",
            },
          },
        },
      },
    },
    "/movies/": {
      post: {
        tags: ["Movies"],
        summary: "Add a new movie",
        parameters: [
          {
            name: "movie",
            in: "body",
            description: "Movie to be added",
            schema: {
              $ref: "#/definitions/NewMovieBody",
            },
          },
        ],
        responses: {
          201: {
            description: "Created",
            schema: {
              $ref: "#/definitions/MovieOkResponse",
            },
          },
          400: {
            description: "Bad Request",
            schema: {
              $ref: "#/definitions/BadRequest",
            },
          },
        },
      },
    },
  },
  "/movies/{id}": {
    put: {
      tags: ["Movies"],
      summary: "Update a Movie",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "Id of the Movie to be updated",
        },
        {
          name: "Movie",
          in: "body",
          description: "Movie to be updated",
          schema: {
            $ref: "#/definitions/NewMovieBody",
          },
        },
      ],
      responses: {
        200: {
          description: "OK",
          schema: {
            $ref: "#/definitions/MovieOkResponse",
          },
        },
        400: {
          description: "Bad Request",
          schema: {
            $ref: "#/definitions/BadRequest",
          },
        },
      },
    },
  },
  "/movies/{id}": {
    delete: {
      tags: ["Movies"],
      summary: "Movie to be deleted",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "Id of the Movie to be deleted",
        },
      ],
      responses: {
        200: {
          description: "OK",
          schema: {
            $ref: "#/definitions/EntryDeleted",
          },
        },
        400: {
          description: "Bad Request",
          schema: {
            $ref: "#/definitions/BadRequest",
          },
        },
      },
    },
  },


  definitions: {
    Book: {
      required: ["name", "author"],
      properties: {
        _id: {
          type: "string",
          uniqueItems: true,
        },
        title: {
          type: "string",
        },
        author: {
          type: "string",
        },
        pages: {
          type: "integer",
        },
      },
    },
  },
};

export default swaggerDocs;
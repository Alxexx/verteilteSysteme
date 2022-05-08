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
  basePath: "/",
  tags: [
    {
      name: "Movies",
      description: "Movies in the database",
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
    "/movies/": {
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
    "/movies/search/{movieName}": {
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
    "/movies/{id}": {
      put: {
        tags: ["Movies"],
        summary: "Update a Movie",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Id of the movie to be updated",
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
            description: "Id of the movie to be deleted",
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

    "/directors/": {
      get: {
        tags: ["Directors"],
        summary: "Get all directors in the system",
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/DirectorOkResponse",
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
    "/directors/{id}": {
      get: {
        tags: ["Directors"],
        summary: "Get a specific director by id",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Id of the director searched for",
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/DirectorOkResponse",
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
    "/directors/search/{directorName}": {
      get: {
        tags: ["Directors"],
        summary: "Get a specific director by name",
        parameters: [
          {
            name: "name",
            in: "path",
            description: "Name of the director searched for",
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/DirectorOkResponse",
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
    "/directors/": {
      post: {
        tags: ["Directors"],
        summary: "Add a new director",
        parameters: [
          {
            name: "director",
            in: "body",
            description: "Director to be added",
            schema: {
              $ref: "#/definitions/NewDirectorBody",
            },
          },
        ],
        responses: {
          201: {
            description: "Created",
            schema: {
              $ref: "#/definitions/DirectorOkResponse",
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
   "/directors/{id}": {
    put: {
      tags: ["Directors"],
      summary: "Update a director",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "Id of the director to be updated",
        },
        {
          name: "Director",
          in: "body",
          description: "Director to be updated",
          schema: {
            $ref: "#/definitions/NewDirectorBody",
          },
        },
      ],
      responses: {
        200: {
          description: "OK",
          schema: {
            $ref: "#/definitions/DirectorOkResponse",
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
    
  
   "/directors/{id}": {
    delete: {
      tags: ["Directors"],
      summary: "Director to be deleted",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "Id of the director to be deleted",
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



   "/genres/": {
    get: {
      tags: ["Genres"],
      summary: "Get all genres in the system",
      responses: {
        200: {
          description: "OK",
          schema: {
            $ref: "#/definitions/GenreOkResponse",
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
   "/genres/{id}": {
    get: {
      tags: ["Genres"],
      summary: "Get a specific genre by id",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "Id of the genre searched for",
        },
      ],
      responses: {
        200: {
          description: "OK",
          schema: {
            $ref: "#/definitions/GenreOkResponse",
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
   "/genres/search/{genreName}": {
    get: {
      tags: ["Genres"],
      summary: "Get a specific genre by name",
      parameters: [
        {
          name: "name",
          in: "path",
          description: "Name of the genre searched for",
        },
      ],
      responses: {
        200: {
          description: "OK",
          schema: {
            $ref: "#/definitions/GenreOkResponse",
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
   "/genres/": {
    post: {
      tags: ["Genres"],
      summary: "Add a new genre",
      parameters: [
        {
          name: "genre",
          in: "body",
          description: "Genre to be added",
          schema: {
            $ref: "#/definitions/NewGenreBody",
          },
        },
      ],
      responses: {
        201: {
          description: "Created",
          schema: {
            $ref: "#/definitions/GenreOkResponse",
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
   "/genres/{id}": {
    put: {
      tags: ["Genres"],
      summary: "Update a genre",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "Id of the genre to be updated",
        },
        {
          name: "genre",
          in: "body",
          description: "Genre to be updated",
          schema: {
            $ref: "#/definitions/NewGenreBody",
          },
        },
      ],
      responses: {
        200: {
          description: "OK",
          schema: {
            $ref: "#/definitions/GenreOkResponse",
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
   "/genres/{id}": {
    delete: {
      tags: ["Genres"],
      summary: "Genre to be deleted",
      parameters: [
        {
          name: "id",
          in: "path",
          description: "Id of the genre to be deleted",
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
    MovieOkResponse: {
      required: ["title", "director", "duration"],
      properties: {
        _id: {
          type: "string",
          uniqueItems: true,
        },
        title: {
          type: "string",
        },
        director: {
          type: "string",
        },
        duration: {
          type: "string",
        },
      },
    },

    NewMovieBody: {
      required: ["title", "director", "duration"],
      properties: {        
        title: {
          type: "string",
        },
        director: {
          type: "string",
        },
        duration: {
          type: "string",
        },
      },
    },

    DirectorOkResponse: {
      required: ["directorName", "age"],
      properties: {
        _id: {
          type: "string",
          uniqueItems: true,
        },
        directorName: {
          type: "string",
        },
        age: {
          type: "string",
        },
      },
    },

    NewDirectorBody: {
      required: ["directorName", "age"],
      properties: {
        directorName: {
          type: "string",
        },
        age: {
          type: "string",
        },
      },
    },

    GenreOkResponse: {
      required: ["genreName", "beschreibung"],
      properties: {
        _id: {
          type: "string",
          uniqueItems: true,
        },
        genreName: {
          type: "string",
        },
        beschreibung: {
          type: "string",
        },
      },
    },

    NewGenreBody: {
      required: ["genreName", "beschreibung"],
      properties: {
        genreName: {
          type: "string",
        },
        beschreibung: {
          type: "string",
        },
      },
    },
    EntryDeleted: {
      properties: {
        Deleted: {
          type: "string",
        },
      },
    },
    BadRequest: {
      properties: {
        errorMessage: {
          type: "string",
        },
      },
    },
  },

  },
};

export default swaggerDocs;
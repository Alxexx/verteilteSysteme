const swaggerDocs = {
    swagger: "2.0",
    info: {
      version: "1.0.0",
      title: "API for Movies",
      description: "Portoflioprüfung Verteilte Systeme",
      license: {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT",
      },
    },
    host: "localhost:3000",
    basePath: "/movies",
    tags: [
      {
        name: "Movies",
        description: "Movies",
      },
    ],
    consumes: ["application/json"],
    produces: ["application/json"],
    paths: {
      "/": {
        get: {
          tags: ["Movies"],
          summary: "Get all Movies in the system",
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Movie",
              },
            },
          },
        },
      },
      "/{id}": {
        get: {
          tags: ["Movies"],
          summary: "Get a specific movie by id",
          parameters: [
            {
              name: "id",
              in: "body",
              description: "Id of the movie searched for",
              schema: {
                $ref: "#/definitions/Movie",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Movie",
              },
            },
          },
        },
      },
      "/search": {
        get: {
          tags: ["Movies"],
          summary: "Get a specific movie by name",
          parameters: [
            {
              name: "name",
              in: "path",
              description: "Name of the movie searched for",
              schema: {
                $ref: "#/definitions/Movie",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Movie",
              },
            },
          },
        },
      },
      "/add": {
        post: {
          tags: ["Movies"],
          summary: "Add a new movie",
          parameters: [
            {
              name: "movie",
              in: "body",
              description: "Movie to be added",
              schema: {
                $ref: "#/definitions/Movie",
              },
            },
          ],
          responses: {
            201: {
              description: "Created",
              schema: {
                $ref: "#/definitions/Movie",
              },
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
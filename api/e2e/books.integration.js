//Prueba de integracion
const { generateManyBooks } = require("../src/fakes/book.fake");

const mockSpyGetAll = jest.fn();
jest.mock("../src/lib/mongo.lib", () =>
  jest.fn().mockImplementation(() => ({
    getAll: mockSpyGetAll,
    create: () => {},
  })),
);

const request = require("supertest");
const createApp = require("../src/app");

describe("test for hello endpoint", () => {
  let app = null;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe("test for GET /api/v1/books", () => {
    test("should return a list of books", () => {
      //Arrange
      const fakeBooks = generateManyBooks(2);
      mockSpyGetAll.mockResolvedValue(fakeBooks);

      return request(app)
        .get("/api/v1/books")
        .expect(200)
        .then((response) => {
          //Assert
          console.log(response.body);
          expect(response.body.length).toEqual(2);
        });
    });
  });
});

//Prueba de integracion
const { generateManyBooks } = require("../src/fakes/book.fake");

const request = require("supertest");
const { MongoClient } = require("mongodb");

const createApp = require("../src/app");
const { config } = require("../src/config");

const DB_NAME = config.dbName;
const MONGO_URL = config.dbUrl;
console.log('URI:', MONGO_URL);

describe("test for hello endpoint", () => {
  let app = null;
  let server = null;
  let database = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
  });

  describe("test for GET /api/v1/books", () => {
    test("should return a list of books", async () => {
      //Arrange
      const seetData = await database.collection("books").insertMany(generateManyBooks(2));
      console.log(seetData);
      return request(app)
        .get("/api/v1/books")
        .expect(200)
        .then((response) => {
          //Assert
          console.log(response.body);
          expect(response.body.length).toEqual(seetData.insertedCount);
        });
    });
  });
});

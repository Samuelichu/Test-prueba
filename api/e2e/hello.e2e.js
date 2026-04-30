//Normalmente se prueban los endpoint
// En test unit, se prueban las funciones mas que todo, porciones de codigo que se pueden ejecutar de forma aislada, sin necesidad de levantar el servidor
// En test de integracion, se prueban varias funciones juntas, por ejemplo, el endpoint y la funcion que se encarga de manejarlo, pero sin necesidad de levantar el servidor
// En test e2e, se prueba todo el flujo, desde el endpoint hasta la base de datos, pasando por todas las capas de la aplicacion, para asegurarnos de que todo funciona correctamente

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

  describe("test for GET /", () => {
    test('should return "Hello world"', () =>
      request(app)
        .get("/")
        .expect(200)
        .then((response) => {
          expect(response.text).toEqual("Hello World!");
        }));
  });
});

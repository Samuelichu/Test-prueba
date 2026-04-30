//describe reune a todo el conjunto de pruebas
describe("Set", () => {
  //antes de todas las pruebas
  //por ejemplo si queremos que primero se levante una bd
  beforeAll(() => {
    console.log("beforeAll");
  });
  //no corre antes de todo sino mas bien, corre antes de cada uno
  beforeEach(() => {
    console.log("beforeEach");
  });
  afterEach(()=>{
    console.log("afterEach");
  })
  test("case 1", () => {
  // expect verifica si el resultado es el esperado
  expect(1+1).toBe(2);
  });
  test("case 2", () => {
    expect(1+1).toBe(2);
  });

  describe("Set 2", () => {
    test("case 3", () => {
      expect(1+1).toBe(2);
    });
    test("case 4", () => {
      expect(1+1).toBe(2);
    });
  });
   //despues de todas las pruebas
   afterAll(() => {
    console.log("afterAll");
  });
});

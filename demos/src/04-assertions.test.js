test("test obj", () => {
  //con objetos utilizamos equal
  const data = { username: "testuser" };
  data.age = 20;
  expect(data).toEqual({ username: "testuser", age: 20 });
});

test("null", () => {
  //.not se usa para negar la afirmacion
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test("boolean", () => {
  expect(true).toEqual(true);
  const bool = true;
  expect(bool).toBeTruthy();
  expect(bool).not.toBeFalsy();
  const bool2 = false;
  expect(bool2).toBeFalsy();
  expect(bool2).not.toBeTruthy();
});

test("string", () => {
  //string contendra la palabra Christoph
  expect("Christoph").toMatch(/Christoph/);
});

test("list / arrays", () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(numbers).toContain(3);
});

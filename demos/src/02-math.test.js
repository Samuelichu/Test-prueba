const { sum, multiply, divide, getrest } = require("./02-math");

test('adds 1 + 3 should be 4', () => {
  //pruebo la funcion
  const result = sum(1, 3);
  //resoluciona la "hipotesis"
  expect(result).toBe(4); // el result es igual a 4
});

test('multiply 5 * 3 should be 15', () => {
  const result = multiply(5, 3);
  expect(result).toBe(15);
});

test('divide 10 / 2 should be 5', () => {
  //puedo tener multiples expect en un mismo test
  const result = divide(10, 2);
  expect(result).toBe(5);
  const rta2 = divide(2, 0);
  expect(rta2).toBeNull(); //retorna null porque no se puede dividir por 0
});

test("getrest 5 % 5 should be 0", () => {
  const rta1 = getrest(5, 5);
  expect(rta1).toBe(0);
});


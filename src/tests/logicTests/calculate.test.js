import calculate from '../../logic/calculate';

let mathObject = { total: 0, next: 0, operation: null };

describe('math operation testing', () => {
  test('addition operations', () => {
    mathObject = calculate(mathObject, '5');
    mathObject = calculate(mathObject, '+');
    mathObject = calculate(mathObject, '3');
    mathObject = calculate(mathObject, '=');
    expect(mathObject.total).toEqual('8');
  });

  test('subtraction operations', () => {
    mathObject = calculate(mathObject, '10');
    mathObject = calculate(mathObject, '-');
    mathObject = calculate(mathObject, '2');
    mathObject = calculate(mathObject, '=');
    expect(mathObject.total).toEqual('8');
  });

  test('multiplication operations', () => {
    mathObject = calculate(mathObject, '2');
    mathObject = calculate(mathObject, 'x');
    mathObject = calculate(mathObject, '4');
    mathObject = calculate(mathObject, '=');
    expect(mathObject.total).toEqual('8');
  });

  test('division operations', () => {
    mathObject = calculate(mathObject, '4');
    mathObject = calculate(mathObject, '/');
    mathObject = calculate(mathObject, '5');
    mathObject = calculate(mathObject, '=');
    expect(mathObject.total).toEqual('0.8');
  });

  test('zero division operatons', () => {
    mathObject = calculate(mathObject, '4');
    mathObject = calculate(mathObject, '/');
    mathObject = calculate(mathObject, '0');
    mathObject = calculate(mathObject, '=');
    expect(mathObject.total).toEqual("Can't divide by 0.");
  });

  test('modulo operations', () => {
    mathObject = calculate(mathObject, '20');
    mathObject = calculate(mathObject, '%');
    mathObject = calculate(mathObject, '6');
    mathObject = calculate(mathObject, '=');
    expect(mathObject.total).toEqual('2');
  });

  test('modulo operations with 0', () => {
    mathObject = calculate(mathObject, '20');
    mathObject = calculate(mathObject, '%');
    mathObject = calculate(mathObject, '0');
    mathObject = calculate(mathObject, '=');
    expect(mathObject.total).toEqual("Can't find modulo as can't divide by 0.");
  });

  test('Reset', () => {
    mathObject = calculate(mathObject, '5');
    mathObject = calculate(mathObject, '+');
    mathObject = calculate(mathObject, '4');
    mathObject = calculate(mathObject, 'AC');
    expect(mathObject.total).toEqual(null);
  });
});

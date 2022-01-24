import operate from '../../logic/operate';

describe('Testing integer operations', () => {
  it('Adds two integers', () => {
    expect(operate(2, 4, '+')).toBe('6');
  });

  it('Subtracts two integers', () => {
    expect(operate(3, 2, '-')).toBe('1');
  });

  it('Multiplies two numbers', () => {
    expect(operate(3, 4, 'x')).toBe('12');
  });

  it('Divides two numbers', () => {
    expect(operate(6, 3, '/')).toBe('2');
  });
});

describe('Testing for zero value operations', () => {
  it('Outputs 0', () => {
    expect(operate(0, 0, '+')).toBe('0');
  });

  it('Outputs 5', () => {
    expect(operate(5, 0, '-')).toBe('5');
  });

  it('Outputs 0', () => {
    expect(operate(0, 4, 'x')).toBe('0');
  });

  it('Outputs 0', () => {
    expect(operate(0, 5, '/')).toBe('0');
  });
});

describe('Testing decimal numbers', () => {
  it('Adds two numbers', () => {
    expect(operate(2.5, 2.4, '+')).toBe('4.9');
  });

  it('Subtracts two decimal numbers', () => {
    expect(operate(2.1, 2.3, '-')).toBe('-0.2');
  });

  it('Multiplies two decimal numbers', () => {
    expect(operate(2.2, 2.2, 'x')).toBe('4.84');
  });

  it('Divides two decimal numbers', () => {
    expect(operate(3, 4, '/')).toBe('0.75');
  });
});

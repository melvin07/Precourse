var exercises = require('../homework');

describe('newString', function() {
  it('newString', function() {
    expect(typeof exercises.newString).toBe('newString');
  });
});

describe('newNum', function() {
  it('newNum', function() {
    expect(typeof exercises.newNum).toBe('newNum');
  });
});

describe('newBool', function() {
  it('newBool', function() {
    expect(typeof exercises.newBool).toBe('newBool');
  });
});

describe('newSubtract', function() {
  it('newSubtract', function() {
    expect(exercises.newSubtract).toBe(true);
  });
});

describe('newMultiply', function() {
  it('newMultiply', function() {
    expect(exercises.newMultiply).toBe(true);
  });
});

describe('newModulo', function() {
  it('newModulo', function() {
    expect(exercises.newModulo).toBe(true);
  });
});

describe('returnString(str)', function() {
  it('returnString', function() {
    let string = 'lambdaSchool';
    expect(exercises.returnString(string)).toBe(string);
  });
});

describe('add(x, y)', function() {
  it('add', function() {
    expect(exercises.add(5, 5)).toBe(10);
    expect(exercises.add(-1, 5)).toBe(4);
  });
});

describe('subtract(x, y)', function() {
  it('subtract', function() {
    expect(exercises.subtract(5, 5)).toBe(0);
    expect(exercises.subtract(-1, 5)).toBe(-6);
    expect(exercises.subtract(5, -5)).toBe(10);
    expect(exercises.subtract(0, 0)).toBe(0);
  });
});

describe('divide(x, y)', function() {
  it('divide', function() {
    expect(exercises.divide(5, 5)).toBe(1);
    expect(exercises.divide(10, 5)).toBe(2);
    expect(exercises.divide(11, 2)).toBe(5.5);
  });
});

describe('multiply(x, y)', function() {
  it('multiply', function() {
    expect(exercises.multiply(5, 5)).toBe(25);
    expect(exercises.multiply(10, -5)).toBe(-50);
    expect(exercises.multiply(11, 0)).toBe(0);
  });
});


describe('areEqual(x, y)', function() {
  it('areEqual', function() {
    expect(exercises.areEqual(15, 15)).toBe(true);
    expect(exercises.areEqual(90, 50)).toBe(false);
    expect(exercises.areEqual('test', 'test')).toBe(true);
  });
});

describe('areSameLength(str1, str2)', function() {
  it('areSameLength', function() {
    expect(exercises.areSameLength('hi', 'there')).toBe(false);
    expect(exercises.areSameLength('javascript', 'bumfuzzled')).toBe(true);
  });
});

describe('lessThanNinety(num)', function() {
  it('lessThanNinety', function() {
    expect(exercises.lessThanNinety(15)).toBe(true);
    expect(exercises.lessThanNinety(90)).toBe(false);
    expect(exercises.lessThanNinety(100)).toBe(false);
  });
});

describe('greaterThanFifty(num)', function() {
  it('greaterThanFifty', function() {
    expect(exercises.greaterThanFifty(15)).toBe(false);
    expect(exercises.greaterThanFifty(50)).toBe(false);
    expect(exercises.greaterThanFifty(60)).toBe(true);
  });
});

describe('getRemainder(x, y)', function() {
  it('getRemainder', function() {
    expect(exercises.getRemainder(5, 5)).toBe(0);
    expect(exercises.getRemainder(10, 5)).toBe(0);
    expect(exercises.getRemainder(11, 2)).toBe(1);
  });
});

describe('isEven(num)', function() {
  it('isEven', function() {
    expect(exercises.isEven(6)).toBe(true);
    expect(exercises.isEven(7)).toBe(false);
    expect(exercises.isEven(0)).toBe(true);
  });
});

describe('isOdd(num)', function() {
  it('isOdd', function() {
    expect(exercises.isOdd(6)).toBe(false);
    expect(exercises.isOdd(7)).toBe(true);
    expect(exercises.isOdd(0)).toBe(false);
  });
});

describe('square(num)', function() {
  it('square', function() {
    expect(exercises.square(6)).toBe(36);
    expect(exercises.square(7)).toBe(49);
    expect(exercises.square(0)).toBe(0);
    expect(exercises.square(-5)).toBe(25);
  });
});

describe('cube(num)', function() {
  it('cube', function() {
    expect(exercises.cube(3)).toBe(27);
    expect(exercises.cube(0)).toBe(0);
    expect(exercises.cube(-5)).toBe(-125);
  });
});

describe('raiseToPower(num, exponent)', function() {
  it('raiseToPower', function() {
    expect(exercises.raiseToPower(2, 2)).toBe(4);
    expect(exercises.raiseToPower(2, 3)).toBe(8);
    expect(exercises.raiseToPower(0, 5)).toBe(0);
    expect(exercises.raiseToPower(10, 1)).toBe(10);
  });
});

describe('roundNumber(num)', function() {
  it('roundNumber', function() {
    expect(exercises.roundNumber(1.5)).toBe(2);
    expect(exercises.roundNumber(2)).toBe(2);
    expect(exercises.roundNumber(0.1)).toBe(0);
  });
});

describe('roundUp(num)', function() {
  it('roundUp', function() {
    expect(exercises.roundUp(1.5)).toBe(2);
    expect(exercises.roundUp(2)).toBe(2);
    expect(exercises.roundUp(0.1)).toBe(1);
  });
});

describe('addExclamationPoint(str)', function() {
  it('addExclamationPoint', function() {
    expect(exercises.addExclamationPoint('hello world')).toBe('hello world!');
    expect(exercises.addExclamationPoint('LambdaSchool')).toBe('LambdaSchool!');
  });
});

describe('combineNames(firstName, lastName)', function() {
  it('combineNames', function() {
    expect(exercises.combineNames('hello', 'world')).toBe('hello world');
    expect(exercises.combineNames('Lambda', 'School')).toBe('Lambda School');
  });
});

describe('getGreeting(name)', function() {
  it('getGreeting \'Hello {name}!\'', function() {
    expect(exercises.getGreeting('Ben')).toBe('Hello Ben!');
    expect(exercises.getGreeting('LambdaSchool')).toBe('Hello LambdaSchool!');
  });
});

describe('getRectangleArea(length, width)', function() {
  it('getRectangleArea', function() {
    expect(exercises.getRectangleArea(2, 2)).toBe(4);
    expect(exercises.getRectangleArea(3, 6)).toBe(18);
    expect(exercises.getRectangleArea(0, 2)).toBe(0);
  });
});

describe('getTriangleArea(base, height)', function() {
  it('getTriangleArea', function() {
    expect(exercises.getTriangleArea(2, 2)).toBe(2);
    expect(exercises.getTriangleArea(0, 2)).toBe(0);
  });
});

const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var realString = isRealString(98);
    expect(realString).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var realString = isRealString('    ');
    expect(realString).toBe(false);
  });

  it('should allow string with non-spaces characters', () => {
    var realString = isRealString('rodrigo    ');
    expect(realString).toBe(true);
  });
});

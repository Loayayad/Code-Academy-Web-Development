var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('the output of 5! is equal to 120',() =>{
      
      //Setup
      const expected = 120;
      const inputNumber = 5;
      //Exercise
      const result = Calculate.factorial(inputNumber);

      //Verify
      assert.equal(result,expected);
    });

    it('the output of 5! is equal to 120',() =>{
      
      //Setup
      const expected = 6;
      const inputNumber = 3;
      //Exercise
      const result = Calculate.factorial(inputNumber);

      //Verify
      assert.equal(result,expected);
    });

  it('returns 1 when you pass in 0.',() =>{
      
      //Setup
      const expected = 1;
      const inputNumber = 0;
      //Exercise
      const result = Calculate.factorial(inputNumber);

      //Verify
      assert.equal(result,expected);
    });

  });
});
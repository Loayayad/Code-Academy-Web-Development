const assert = require('assert');
const rooster = require('../index');

describe('rooster',() =>{
  describe('.announceDawn',() =>{
    it('returns a rooster call',()=>{
      //Setup
      // Define expected output
      const expected = 'cock-a-doodle-doo!';
      //Exercise
      // Call Rooster.announceDawn and store result in variable
      const actual = rooster.announceDawn();
      //Verify
      // Use an assert method to compare actual and expected result
      assert.equal(actual,expected);
    });
  });

  describe('.timeAtDawn',() =>{
    it('returns its argument as a string',()=>{
      
      //Setup
      let inputNumber = 11;
      let expected = '11';
      
      //Exercise
      const actual = rooster.timeAtDawn(inputNumber);
      
      //Verify
      assert.equal(actual,expected);

    });

    it('throw range error if passed a number less than 0', () =>{
      //Setup
      const inputNumber = -1;
      const expected = RangeError;

      //Verify
      assert.throws(() =>{
        rooster.timeAtDawn(inputNumber); 
      },expected);
    });

    it('throw range error if passed a number more than 23', () =>{
      //Setup
      const inputNumber = 25;
      const expected = RangeError;

      //Verify
      assert.throws(() =>{
        rooster.timeAtDawn(inputNumber); 
      },expected);
    });
  });
});
describe('FizzBuzz', function(){
  var fizzBuzz;

  describe('knowns when a  number is', function(){

    beforeEach(function(){
      fizzBuzz = new FizzBuzz();
    });

    it('divisable  by 3', function(){
      expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function(){

    beforeEach(function(){
      fizzBuzz = new FizzBuzz();
    });

    it('divisible by 3', function(){
      expect(fizzBuzz.isDivisibleByThree(1)).toBe(false);
    });
  });

  describe('when playing, play', function() {

    beforeEach(function(){
      fizzBuzz = new FizzBuzz();
    });

    it('"Fizz" when a number is divisible by 3', function() {
      expect(fizzBuzz.play(3)).toEqual("Fizz");
    });
    
    it('"Buzz" when a number is divisible by 5', function() {
      expect(fizzBuzz.play(5)).toEqual("Buzz");
    });

    it('"FizzBuzz" when a number is divisible by 3 and 5', function() {
      expect(fizzBuzz.play(15)).toEqual("FizzBuzz");
    });
    
  });

});

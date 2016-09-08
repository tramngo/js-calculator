/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

function calculatorModule () {
  var calculator = { };
  var _memory = 0;
  var _total = 0; 

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

  calculator.load=function(x) {
    if(typeof x !== 'number'){
     throw new Error('Wrong data type you dummy');
   }
    _total=x;
    return _total;
  };

  /**
   * Return the value of `total`
   * @return { Number }
   */

calculator.getTotal=function() {
  return _total;
};


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

calculator.add=function(x) {
  if(typeof x !== 'number'){
     throw new Error('Wrong data type you dummy');
   }
  _total += x;
};

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

calculator.subtract=function(x) {
  if(typeof x !== 'number'){
     throw new Error('Wrong data type you dummy');
   }
  _total -= x;
};

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

calculator.multiply=function(x) {
  if(typeof x !== 'number'){
     throw new Error('Wrong data type you dummy');
   }
  _total *=x;
};

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

calculator.divide=function(x) {
  if(typeof x !== 'number'){
     throw new Error('Wrong data type you dummy');
   }
  _total /=x;
};

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */

calculator.recallMemory=function() {
  return _memory;
};

  /**
   * Stores the value of `total` to `memory`
   */

calculator.saveMemory=function() {
  _memory = _total;
};

  /**
   * Clear the value stored at `memory`
   */

calculator.clearMemory = function() {
  _memory = 0;
};

  /**
   * Validation
   */

  
  return calculator;
}
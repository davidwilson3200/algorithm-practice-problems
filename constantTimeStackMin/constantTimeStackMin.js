/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
  var Stack = function() {
  var aStack= [];
  var minimumValueTemp = [];
// add an item to the top of the stack
  this.push = function(value) {
    if (!minimumValueTemp.length ||
        value <= minimumValueTemp[minimumValueTemp.length - 1]) {
      minimumValueTemp.push(value);
    }
    aStack.push(value);
      };

// remove an item from the top of the stack
  this.pop = function() {
    var value = aStack.pop();
    if (value === minimumValueTemp[minimumValueTemp.length - 1]) {
      minimumValueTemp.pop();
    }
    return value;
      };

// return the number of items in the stack
  this.size = function() {
    return aStack.length;
      };

// return the minimum value in the stack
  this.min = function() {
    return minimumValueTemp[minimumValueTemp.length - 1];
  };
};


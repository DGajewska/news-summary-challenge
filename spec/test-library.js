(function(exports){
  var anticipate = {
      includedIn: function(array, itemToLookFor){
        if(array.indexOf(itemToLookFor)<0){
          throw new Error(itemToLookFor + " is not within " + array);
        } else {
          return "Test passes";
        }
      },
      toBeTheSame: function(item1, item2) {
        if(item1 !== item2){
          throw new Error(item1 + " does not equal " + item2)
        } else {
          return "Test passes";
        }
      },
      isEmptyArray: function(array) {
        if(!(Array.isArray(array) && array.length === 0)){
          throw new Error(array + " is not an empty array");
        } else {
          return "Test passes";
        }
      },
  };

  exports.anticipate = anticipate;
})(this);

function test(name, fn) {
  console.log(name + ": " + fn);
}

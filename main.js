var composeObjects = function (targetObj) {
  var err = 'Error: all arguments passed in to compose must be objects';

  if (typeof targetObj !== 'object') {
    throw err;
  } else {
    for (var i = 0; i < arguments.length; i += 1) {
      var arg = arguments[i];

      if (typeof arg === 'object') {
        for (var key in arg) {
          targetObj[key] = arg[key];
        }
      } else {
        throw err;
      }
    }

    return targetObj;
  }
};

function composeConstructors () {
  var arrConstructors = arguments;

  return function (params) {
    for (var i = arrConstructors.length - 1; i > -1; i--) {
      params = arrConstructors[i].call(this, params) || params;
    }
      
     return params;
  };
}

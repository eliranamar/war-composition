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

function composeConstructors() {
  var arrConstructors = arguments;

  return function (params) {
    for (var i = arrConstructors.length - 1; i > -1; i--) {
      params = arrConstructors[i].call(this, params) || params;
    }

    return params;
  };
}

var refueler = function () {
  this.refuel = function () {
    this.state.gas++;
  }
}

var shooter = function () {
  this.shoot = function (obj) {
    obj.state.dead = true;
  }
}

var flyer = function (obj) {
  this.state = obj;
  this.fly = function () {
    if (this.state.gas > 0) {
      this.state.position += 10;
      this.state.gas--;
    }
  }
}

var saver = function () {
  this.save = function (obj) {
    obj.state.dead = false;
  }
}

var driver = function (obj) {
  this.state = obj;
  this.drive = function () {
    if (this.state.gas > 0) {
      this.state.gas--;
      this.state.position += 5;
    }
  }
}

var plane = composeConstructors(refueler,flyer,shooter);

var medicJeep = composeConstructors(refueler,driver,saver);

var attackJeep = composeConstructors(refueler,driver,shooter);

var turret = composeConstructors(shooter);
describe('refueler', function () {
  it('should be defined', function () {
    expect(refueler).toBeDefined();
  });
  it('should be a function', function () {
    expect(typeof refueler).toEqual('function');
  });
  it('should be a constructor', function () {
    expect(typeof new refueler()).toEqual('object');
  });
  it('should return an object with the property, "refuel"', function () {
    expect(new refueler()).toHaveProperty('refuel');
  });
});
describe('new refueler().refuel', function () {
  it('should be a function', function () {
    expect(typeof new refueler().refuel).toEqual('function')
  });
  it('should increment the "state.gas" property of the given "state" object by 1', function () {
    var state = { state :{
      gas: 0
    }
    };
    var obj = composeObjects(state, new refueler(state));
    obj.refuel();
    expect(obj.state.gas).toEqual(1);
  });
});
describe('shooter', function () {
  it('should be defined', function () {
    expect(shooter).toBeDefined();
  });
  it('should be a function', function () {
    expect(typeof shooter).toEqual('function');
  });
  it('should be a constructor', function () {
    expect(typeof new shooter()).toEqual('object');
  });

  it('should return an object with the property, "shoot"', function () {
    expect(new shooter()).toHaveProperty('shoot');
  });
});

describe('new shooter().shoot', function () {
  it('should be a function', function () {
    expect(typeof new shooter().shoot).toEqual('function');
  });

  it('should set the "dead" property of a given object to "true"', function () {
    var state = {
      dead: false
    };
    var obj1 = new flyer(state);

    var obj2 = new shooter();
    obj2.shoot(obj1);

    expect(obj1.state.dead).toEqual(true);
  });
});

describe('saver', function () {
  it('should be defined', function () {
    expect(saver).toBeDefined();
  });

  it('should be a function', function () {
    expect(typeof saver).toEqual('function');
  });

  it('should be a constructor', function () {
    expect(typeof new saver()).toEqual('object');
  });

  it('should return an object with the property, "save"', function () {
    expect(new saver()).toHaveProperty('save');
  });
});

describe('saver().save', function () {
  it('should be a function', function () {
    expect(typeof new saver().save).toEqual('function');
  });

  it('should set the "dead" property of a given object to "false"', function () {
    var obj1 = new flyer({
      dead: true
    });

    var obj2 = new saver();
    obj2.save(obj1);

    expect(obj1.state.dead).toEqual(false);
  });
});

describe('flyer', function () {
  it('should be defined', function () {
    expect(flyer).toBeDefined();
  });

  it('should be a function', function () {
    expect(typeof flyer).toEqual('function');
  });

  it('should be a constructor', function () {
    expect(typeof new flyer()).toEqual('object');
  });

  it('should return an object with the property, "fly"', function () {
    expect(new flyer()).toHaveProperty('fly');
  });
});

describe('flyer().fly', function () {
  it('should be a function', function () {
    expect(typeof new flyer().fly).toEqual('function')
  });

  it('should increment the given "state" objects "position" by 10 if its "gas" property is greater than 0', function () {
    var state = {
      gas: 1,
      position: 0
    };

    var obj = composeObjects(state, new flyer(state));
    obj.fly();

    expect(obj.state.position).toEqual(10);
  });

  it('should NOT increment the given "state" objects "position" if its "gas" property is less than 1', function () {
    var state = {
      gas: 0,
      position: 0
    };

    var obj = composeObjects(state, new flyer(state));
    obj.fly();

    expect(obj.state.position).toEqual(0);
  });

  it('should decrease the "gas" property on the given "state" object by 1 if its "gas" property is greater than 0', function () {
    var state = {
      gas: 1,
      position: 0
    };

    var obj = composeObjects(state, new flyer(state));
    obj.fly();

    expect(obj.state.gas).toEqual(0);
  });

  it('should NOT increase the "gas" property on the given "state" object if its "gas" property is less than 1', function () {
    var state = {
      gas: 0,
      position: 0
    };

    var obj = composeObjects(state, new flyer(state));
    obj.fly();

    expect(obj.state.gas).toEqual(0);
  });
});

describe('driver', function () {
  it('should be defined', function () {
    expect(driver).toBeDefined();
  });

  it('should be a function', function () {
    expect(typeof driver).toEqual('function');
  });

  it('should be a constructor', function () {
    expect(typeof new driver()).toEqual('object');
  });

  it('should return an object with the property, "drive"', function () {
    expect(new driver()).toHaveProperty('drive');
  });
});

describe('driver().drive', function () {
  it('should be a function', function () {
    expect(typeof new driver().drive).toEqual('function')
  });

  it('should increment the given "state" objects "position" by 5 if its "gas" property is greater than 0', function () {
    var state = {
      gas: 1,
      position: 0
    };

    var obj = composeObjects(state, new driver(state));
    obj.drive();

    expect(obj.state.position).toEqual(5);
  });

  it('should NOT increment the given "state" objects "position" by if its "gas" property is less than 1', function () {
    var state = {
      gas: 0,
      position: 0
    };

    var obj = composeObjects(state, new driver(state));
    obj.drive();

    expect(obj.state.position).toEqual(0);
  });

  it('should decrease the "gas" property on the given "state" object by 1 if its "gas" property is greater than 0', function () {
    var state = {
      gas: 1,
      position: 0
    };

    var obj = composeObjects(state,new driver(state));
    obj.drive();

    expect(obj.state.gas).toEqual(0);
  });

  it('should NOT decrease the "gas" property on the given "state" object if its "gas" property is less than 1', function () {
    var state = {
      gas: 0,
      position: 0
    };

    var obj = composeObjects(state, new driver(state));
    obj.drive();

    expect(obj.state.gas).toEqual(0);
  });
});

describe('plane', function () {
  it('should be a refueler, a flyer and a shooter', function () {
    var plane1 = new plane();

    var props = [
      'refuel',
      'fly',
      'shoot'
    ];

    props.forEach(function(prop){
      expect(plane1).toHaveProperty('refuel');
      expect(plane1).toHaveProperty('fly');
      expect(plane1).toHaveProperty('shoot');
    });
  });
});

describe('medicJeep', function () {
  it('should be a refueler, a driver and a saver', function () {
    var medicJeep1 = new medicJeep();

    var props = [
      'refuel',
      'drive',
      'save'
    ];

      expect(medicJeep1).toHaveProperty('refuel');
      expect(medicJeep1).toHaveProperty('drive');
      expect(medicJeep1).toHaveProperty('save');
  });
});

describe('attackJeep', function () {
  it('should be a refueler, a driver and a shooter', function () {
    var attackJeep1 = new attackJeep();

    var props = [
      'refuel',
      'drive',
      'shoot'
    ];

    props.forEach(function(prop){
      expect(attackJeep1).toHaveProperty('refuel');
      expect(attackJeep1).toHaveProperty('drive');
      expect(attackJeep1).toHaveProperty('shoot');
    });
  });
});

describe('turret', function () {
  it('should be a shooter', function () {
    var turret1 = new turret();

    var props = [
      'shoot'
    ];

      expect(turret1).toHaveProperty('shoot');
  });
});

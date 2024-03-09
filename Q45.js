//Question 45:
var myCar = function (X, Y) {
    var items = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        items[_i - 2] = arguments[_i];
    }
    var car = {};
    car['Manufacturer'] = X;
    car['Model'] = Y;
    car[items[0]] = items[1];
    car[items[2]] = items[3];
    console.log(car);
    return;
};
myCar("Toyota", "Corola Gli", "Color", "Green", "Milage", "120");

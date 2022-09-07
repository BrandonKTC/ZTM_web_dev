/* Datatype */
// boolean
var isCool = true;
// number
var age = 56;
// string
var eyeColor = 'brown';
// array
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
// Object
var wizard = {
    a: 'john'
};
// null and undefined
var meh = undefined;
var noo = null;
// tuple
var basket = ['basketball', 5];
// Enum
var size;
(function (size) {
    size[size["small"] = 1] = "small";
    size[size["medium"] = 2] = "medium";
    size[size["large"] = 3] = "large";
})(size || (size = {}));
var sizeName = size[2];
// Any - !!!!!! BE CAREFUL
var whatever = 'aggghhhhhhh nooooooo!!!!';
whatever = basket;
// void
var sing = function () {
    console.log('lalalalala');
};
// never
var error = function () {
    throw Error('ooops');
};
var fightRobotArmy = function (robots) {
    console.log('FIGHT!');
};
var fightRobotArmy2 = function (robots) {
    console.log('FIGHT');
};
var dog = {};
dog.count;
// Func
var fightRobotArmy3 = function (robots) {
    console.log('FIGHT!');
};
var fightRobotArmy4 = function (robots) {
    console.log('FIGHT!');
    return 5;
};
// Classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lalalalala';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello ".concat(this.sing);
    };
    return Animal;
}());
var lion = new Animal('RAAAWWR');
lion.greet();
// Union
var confused = true;

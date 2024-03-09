//Question 43:
var magicians = ['aladin', 'samri', 'goga'];
function show_magicians() {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magic = magicians_1[_i];
        console.log(magic);
    }
    console.log(magicians);
}
show_magicians();
function make_great() {
    var new_magicians = [''];
    for (var i = 0; i < magicians.length; i++) {
        new_magicians[i] = 'The Great Magician '.concat(magicians[i]);
        console.log(new_magicians);
    }
    console.log(magicians);
}
make_great();
show_magicians();
//Question 44:
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var sandwichItems = [''];
    for (var i = 0; i < items.length; i++) {
        sandwichItems[i] = items[i];
    }
    console.log("\"Your Sandwich is ready with following ingredients\"\n[".concat(sandwichItems, "]"));
    // console.log(sandwichItems)
}
makeSandwich('Butter', 'Chicken', 'Mayo');
makeSandwich('Tomato Ketchup', 'Beef', 'Mushrooms');
makeSandwich('Cheese', 'chicken', 'Mayo', 'Vegitables');

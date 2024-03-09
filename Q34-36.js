//Question 33:
var K = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, K_1 = K; _i < K_1.length; _i++) {
    var e = K_1[_i];
    if (e === 1) {
        console.log(e + 'st');
    }
    else if (e === 2) {
        console.log(e + 'nd');
    }
    else if (e === 3) {
        console.log(e + 'rd');
    }
    else {
        console.log(e + 'th');
    }
}
//Question 34:
var pizzas = ['\ntikka', 'fajita', 'peproni', 'malai boti', 'vegitable'];
for (var _a = 0, pizzas_1 = pizzas; _a < pizzas_1.length; _a++) {
    var pizza = pizzas_1[_a];
    console.log(pizza.toUpperCase());
    console.log("I Like ".concat(pizza.toUpperCase(), " Flavour Pizza \n"));
}
console.log("I like all kinds of pizzas flavour and love to eat and try different flavors every day . The most i like in pizzas is cheeseand different yummy sauces.Even I am thinking to open a pizza businesswith name \"Pizza's craze\"\n \"I REALLY LOVE PIZZA\"");
//Question 35:
var pets = ['cat', 'dog', 'parrot'];
for (var _b = 0, pets_1 = pets; _b < pets_1.length; _b++) {
    var pet = pets_1[_b];
    console.log('\n', pet);
    console.log('A ' + pet + ' make a great pet ');
}
console.log(pets[0] + ',' + pets[1] + ',' + ' and ' + pets[2] + ' the all are adorable pets');
//Question 35:
// let pets  = ['cat', 'dog','parrot'];
for (var _c = 0, pets_2 = pets; _c < pets_2.length; _c++) {
    var pet = pets_2[_c];
    console.log(pet);
    console.log('A ' + pet + ' make a great pet ');
}
console.log(pets[0] + ',' + pets[1] + ',' + ' and ' + pets[2] + ' the all are adorable pets');
//Question 36:
function make_shirt(size, msg) {
    console.log("\nYour T shirt is Ready\n\n--------------\n\"size\"\n--------------\n ".concat(size, "\n\nyou can also see your message on it\n\n--------------\n your message\n--------------\n\n").concat(msg));
}

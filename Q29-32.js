//Question 29:
var favrFruits = ['banana', 'mango', 'pineapple'];
var f = 'pineapple';
for (var _i = 0, favrFruits_1 = favrFruits; _i < favrFruits_1.length; _i++) {
    var i = favrFruits_1[_i];
    if (i == f.toLowerCase()) {
        console.log("Your really Like ".concat(f));
    }
    else {
    }
}
;
//Question 30:
var userName = ['kamran', 'saleem', 'admin', 'mehmood'];
for (var _a = 0, userName_1 = userName; _a < userName_1.length; _a++) {
    var i = userName_1[_a];
    console.log('\n', i.toUpperCase());
    if (i === 'admin') {
        console.log("\tHi ", i.toUpperCase(), " Would you like to see Status Report ");
    }
    else {
        console.log("\tHello ", i.toUpperCase(), " Welcom to App ");
    }
}
//Question 31
// let userName = ['kamran','saleem','admin','mehmood' ];
console.log('length of username was = ', userName.length);
userName = [];
console.log('length of username is = ', userName.length);
if (userName.length === 0) {
    console.log('we need to find some user');
}
else { }
;
//Question 32:
var New_user = ['saleem', 'Kamran', 'hammad', 'Ahmed', 'Sobhan'];
var Curr_user = ['KAMRAN', 'Mehmood', 'Rehab', 'ahmed', 'Noman'];
for (var _b = 0, New_user_1 = New_user; _b < New_user_1.length; _b++) {
    var nu = New_user_1[_b];
    console.log('\nchecking user name ', nu);
    for (var _c = 0, Curr_user_1 = Curr_user; _c < Curr_user_1.length; _c++) {
        var cu = Curr_user_1[_c];
        if (cu.toLowerCase() === nu.toLowerCase()) {
            console.log("".concat(cu, " will need to enter a new username"));
            nu = " ";
            break;
        }
        else {
        }
    }
    if (nu === " ") {
    }
    else {
        console.log("".concat(nu, " user is available"));
    }
}

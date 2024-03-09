//Question 37:
make_shirt('Medium', 'I LOVE PAKISTAN');
function make_shirt(size, msg) {
    if (size === void 0) { size = 'Large'; }
    if (msg === void 0) { msg = 'I Love Typescript'; }
    console.log("\n\n__________________________\n\t\nNEW MESSAGE \n__________________________\n\nYour T shirt is Ready\n\n--------------\n\"size\"\n--------------\n\t\n".concat(size, "\n\nyou can also see your message on it\n--------------\nyour message\n--------------\n\n").concat(msg));
}
make_shirt();
make_shirt('Medium');
make_shirt('Small');
//Question 38:
function describecity(a, b) {
    if (b === void 0) { b = 'Pakistan'; }
    console.log("".concat(a, " is the city of ").concat(b));
}
describecity('Lahore');
describecity('Karachi');
describecity('Delhi', 'India');

//QUESTION 3:
function titlecase(nam) {
    var title = "";
    for (var i = 0; i <= nam.length; i++) {
        var k = nam.charAt(i);
        if (i == 0) {
            title = title.concat(k.toUpperCase());
        }
        else if (nam.charAt(i - 1) == " ") {
            title = title.concat(k.toUpperCase());
        }
        else {
            title = title.concat(k.toLowerCase());
        }
    }
    console.log("In Upper Case: ".concat(nam.toUpperCase(), " "));
    console.log("In Lower Case: ".concat(nam.toLowerCase()));
    console.log("In Title Case : ".concat(title));
}
titlecase('sir zia khan');
//Question 4:
console.log("Muhammad Ali Jinnah said, ", '\n\t"\
I do not believe in taking the right decision, \
I take decision and make it right"');
//Question 5:
var fam_Person = "Muhammad Ali Jinnah";
var mesg = "I do not believe in taking \
the right decision, I take a decision and make it right";
console.log("".concat(fam_Person, " said, \n\t\"").concat(mesg, "\""));

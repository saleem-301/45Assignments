//Question 42:
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
    for (var i = 0; i < magicians.length; i++) {
        // console.log(magicians[i],magicians.length)
        magicians[i] = 'The Great Magician '.concat(magicians[i]);
    }
    console.log(magicians);
}
make_great();

//Question 39:
function describe_city(a, b) {
    return console.log("\"".concat(a, ", ").concat(b, "\""));
}
describe_city('Lahore', 'Pakistan');
describe_city('karachi', 'Pakistan');
describe_city('Delhi', 'India');
//Question 40:
function make_album(a, b, c) {
    if (c === void 0) { c = ''; }
    var musicAlbum = { 'Artist Name': a, 'Album Name': b, 'No of Tracks': c };
    // musicAlbum['Aritist Name'] = a;
    console.log(musicAlbum);
}
make_album('atif', 'Doori');
make_album('Ali Zafar', 'Huqa Pani', '11');
make_album('Rahat Fateh Ali Khan', 'Charkha"', '8');

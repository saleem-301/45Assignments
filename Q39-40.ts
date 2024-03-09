
//Question 39:
function describe_city(a:string,b:string){
    return console.log(`"${a}, ${b}"`)}

describe_city('Lahore','Pakistan');
describe_city('karachi','Pakistan');
describe_city('Delhi','India');


//Question 40:

function make_album(a:string,b:string ,c:string ='')
{
    let musicAlbum = {'Artist Name':a, 'Album Name':b, 'No of Tracks':c}
    // musicAlbum['Aritist Name'] = a;
    console.log(musicAlbum);
}

make_album('atif','Doori');
make_album('Ali Zafar','Huqa Pani','11');
make_album('Rahat Fateh Ali Khan','Charkha"','8');


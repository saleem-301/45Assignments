//Question 42:
let magicians = ['aladin','samri','goga']

function show_magicians(){
    for (let magic of magicians){
        console.log(magic);
        
    }
    console.log(magicians);

}

show_magicians()


function make_great()
{
    for (let i=0; i < magicians.length; i++){
        
        // console.log(magicians[i],magicians.length)
         magicians[i] = 'The Great Magician '.concat(magicians[i]);
       
          }
          console.log(magicians);
}
make_great()
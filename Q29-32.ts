//Question 29:
let favrFruits = ['banana', 'mango','pineapple']

let f :string= 'pineapple';

for (let i of favrFruits)
{
    if ( i == f.toLowerCase() )
    {
        console.log(`Your really Like ${f}`)
    }
    else {

    } 

};


//Question 30:
let userName = ['kamran','saleem','admin','mehmood' ];


for (let i of userName)
{console.log('\n',i.toUpperCase());
    if (i === 'admin')
    {
        console.log("\tHi ", i.toUpperCase() ," Would you like to see Status Report ")
    }
    else
    {
        console.log("\tHello " ,i.toUpperCase() ," Welcom to App ")
    }

}  



//Question 31

// let userName = ['kamran','saleem','admin','mehmood' ];

console.log('length of username was = ',userName.length);

userName = [];
console.log('length of username is = ',userName.length)

if (userName.length === 0){console.log('we need to find some user')}
else {};



//Question 32:

let New_user = ['saleem','Kamran','hammad','Ahmed','Sobhan']
let Curr_user = ['KAMRAN','Mehmood','Rehab','ahmed','Noman']


for (let nu of New_user){
    
    console.log('\nchecking user name ', nu);

    for (let cu of Curr_user)
    {
       
        if (cu.toLowerCase() === nu.toLowerCase())

        {
            console.log(`${cu} will need to enter a new username`);
            nu = " "
            
            break;
        }
        
        else{
            
        }
    }
   if(nu === " "){

   }
   else {console.log(`${nu} user is available`)
    }
    
}

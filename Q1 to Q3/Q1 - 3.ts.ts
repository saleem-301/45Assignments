//QUESTION 1:

//Installed Node.js, Typescript and Visual Studio Codde.


//QUESTION 2:
let name1 = "sir zia khan";
console.log (name1);
    

//QUESTION 3:
function titlecase (name1:string)
{ 

let title = ""
for (let i = 0; i<= name1.length; i++)
    { 
        let k = name1.charAt(i); 
        
        if (i == 0) 
        {
           title = title.concat(k.toUpperCase())
        }
        else if (name1.charAt(i-1)==" ")
        {
            title = title.concat(k.toUpperCase())
        }
        else {
            title = title.concat(k.toLowerCase())
            }
                  
        
    }
    console.log(`In Upper Case: ${name1.toUpperCase()} `);
    console.log(`In Lower Case: ${name1.toLowerCase()}`);
    console.log(`In Title Case : ${title}`);
}

titlecase(name1);
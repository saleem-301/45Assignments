//Question 37:
make_shirt('Medium','I LOVE PAKISTAN')

function make_shirt(size = 'Large',msg = 'I Love Typescript')

{console.log(`\n
__________________________\n\t
NEW MESSAGE \n__________________________\n
Your T shirt is Ready\n
--------------\n"size"\n--------------\n\t
${size}\n
you can also see your message on it\n--------------\nyour message\n--------------\n
${msg}`)
}

make_shirt();
make_shirt('Medium');
make_shirt('Small');

//Question 38:
function describecity(a,b='Pakistan'){
    console.log(`${a} is the city of ${b}`);

}
describecity('Lahore');
describecity('Karachi');
describecity('Delhi','India');


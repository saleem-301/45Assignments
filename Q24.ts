
//Question 24:
// Tests for equality and inequality with strings
let strn='Pakitan Zindabad';
console.log(strn.charAt(0)=='P');
console.log(strn.charAt(8)=='z');

// Tests using the lower case function
let B = 'NOKIA'

console.log(B.toLowerCase()== 'nokia');
console.log(B != 'NOKIA' );

// Numerical tests involving equality and inequality, 
// greater than and less than, greater than or equal to,and less than or equal to

let num = [2,5,9,8,15];
console.log(num[0]>3);
console.log(num.length>=5);
console.log(num.length<=4);


// Tests using "and" and "or" operators

console.log(num[0]<3 && num[1] ==5);


// Test whether an item is in a array
// Test whether an item is not in a array


let Mount = [2,3,8,9,6,7];

let k = 2;

for (const j of Mount){
    // console.log(j, Mount[Mount.length-1]);

    if(k==j){
        console.log(k==j);
        break;
    }
              
    else if ((k != j) && (j ==  Mount[(Mount.length)-1])){
        console.log(k==j)
        break;
    }
    else {;

        }
};

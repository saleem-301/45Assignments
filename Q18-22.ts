
//Question 18:

let favrPlace = ['maldives', 'aifil tower', 'china wall', 'burj khalifa', 'hawaii']
let sortedPlace = [favrPlace[0]];;

for (let i = 1 ; i<favrPlace.length; i++){
    sortedPlace.push(favrPlace[i])
    
}
console.log('\nfavrPlace = ',favrPlace,'\n');
console.log('\nsortedPlace = ',sortedPlace.sort(),'\n');
console.log('\nfavrPlace = ',favrPlace,'\n');

console.log('\nreverse sort = ',sortedPlace.reverse(),'\n');
console.log('\nfavrPlace = ',favrPlace,'\n');
console.log('\nfavrPlace = ',favrPlace.reverse(),'\n');
console.log('\nfavrPlace = ',favrPlace.reverse(),'\n');


//Question 19:
var guests = ['HAMAD','AHMED','SUBHAN'];
console.log('\nList of Invited People \n\t',guests,'\n');

console.log('No of Guest Invited = ', guests.length);

//Question 20:

let list = ['k2','MountEverst','Himalya'];
console.log(list);

//Question 21:
let Mounts = ['k2','MountEverst','Himalya'];
let rivers = ['jehlum','chena','sindh', 'satlej']

let objs = {1:Mounts,2:rivers};

console.log(objs[1]);


//Question 22:
// let Mount = ['k2','MountEverst','Himalya'];
// let river = ['jehlum','chena','sindh', 'satlej']

//console.log(Mount[Mount.length]); Error 
console.log(Mounts[Mounts.length-1]);


//Question 45:
let myCar = (X, Y ,...items)=>{
    const car = {};
    car['Manufacturer'] = X;
    car['Model'] = Y;
    car[items[0]]=items[1];
    car[items[2]]=items[3];
    console.log(car);
    return;
};
myCar ("Toyota", "Corola Gli","Color","Green","Milage","120")
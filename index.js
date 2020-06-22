// var a, b, c, d, vidurkis;
// a=1;
// b=2;
// c=3;
// d=6;
// vidurkis=(a+b+c+d)/4;
// console.log(vidurkis);

// ssddddddddddd
        
//  gkggll  

// 'use strict'

// var dm=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
//     [10,11,12]
// ];
// for (var i=0; i<dm.length; i++) {
//     for (var j=0; j<dm[i].length; j++) {
//         console.log(dm[i][j]);
//     }
// }
// console.log("Programos pabaiga");

'use strict'

// let (Name, Speed, MaxSpeed, Distance);

// var dm=[
//     [ford, 0, 220, 0],
//     [bmw, 0, 300, 0],
//     [opel, 0 210, 0],
//     [toyota, 0, 210, 0],
//     [mercedes, 0, 230, 0],
//     [lexus, 0, 250, 0],
//     [mazda, 0, 215, 0],
//     [porsh, 0, 310, 0],
// ];


let Name="Ford";
let Speed=0;
let MaxSpeed=260;
let Distance=0;
const TotalDistance=30000;


while (Distance<TotalDistance) {

    let rnd=Math.random();
    
    if (rnd<0.3) {
        let tmp=Math.trunc(Math.random()*5+1);
        Speed = Speed - tmp;
        if (Speed < 0) {
            Speed =0;
        } 
    }
    if (rnd>0.5){
        let tmp1=Math.trunc(Math.random()*10+1);
        Speed = Speed + tmp1;
        if (Speed > MaxSpeed) {
            Speed =MaxSpeed;
        }
    }

    Distance = Distance + Speed;
       
};

console.log(Distance);
console.log(Speed);

console.log("Finisas");



   

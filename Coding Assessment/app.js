//Coding Assessment 1
const massRob = 78;
const heightRob = 1.69;
const massDejon = 92;
const heightDejon = 1.95;

let bmiRob = massRob / (heightRob * heightRob);
let bmiDejon = massDejon / (heightDejon * heightDejon);

console.log(`Dejons BMI is ${bmiDejon}`);
console.log(`Robs BMI is ${bmiRob}`);

let bmiHigher = (bmiRob >= bmiDejon);
console.log(bmiHigher);
console.log(`Is Robs BMI higher than Dejons? ${bmiHigher}`);
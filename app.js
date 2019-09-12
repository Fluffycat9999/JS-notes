/* //////Primitives
let numbers = 4 ; //let values can be changed const can't
let numbers - 5;
let numbersArrays = [1,2,3,4,5];
console.log(numbers)

let string = 'string';  //single or double quotes
let strings = "strings";

let boolean = true; //or false

////////// */

/* const firstName = 'Rob';
const job = 'Student';
const birthYear = '2002';
let isMarried = false;

/* console.log("Hello my name is " = firstName + "I am a " + job + "and I was born in " + birthYear = "and am I married?" + isMarried);   //the way it used to be
console.log(`Hello my name is ${firstName}, I am a ${job}, I was born in ${birthYear}, and am I married? ${isMarried}`)  //how it is now */


/* const now = new Date().getFullYear();
const yearIlsa = 2003;
let fullAge = 18;
let isFullAge = now - yearIlsa >= fullAge;
//console.log(isFullAge);
let ageWill = now - 2002;
let ageNick = 18;
let averageAge = (ageNick + ageWill) / 2;
//console.log(averageAge); */

/*let x,y,z;
x = 5;
y = x;
z = y;
q = z;
console.log(z); */

//////
//if else statements

/* let firstName = 'Paul';
let status = 'married';

if(status === 'single') {
    console.log(`${firstName} is single and ready to mingle`);
} else{
    console.log(`Someone made a big mistake with ${firstName}`);
} */

/* const massRob = 78;
const heightRob = 1.69;
const massDejon = 92;
const heightDejon = 1.95;

let bmiRob = massRob / (heightRob * heightRob);
let bmiDejon = massDejon / (heightDejon * heightDejon);

if(bmiRob > bmiDejon) {
    console.log('Rob is heavier');
} else {
    console.log('Dejon is heavier');
} */

/* let firstName = 'Sarah';
let age = 17;

if(age < 13) {
    console.log(`${firstName} is a young lady`);
} else if (age >= 13 && age < 20) {
    console.log(`${firstName} is a teenager`);
} else if (age >=20 && age < 30) {
    console.log(`${firstName} is a young women`);
} else {
    console.log('She a boomer');
} */


/////Ternary Operator
/* let firstName = 'Melkadze';
let age = 17;

age >= 21 ? console.log(`${firstName} will drink no no juice`) : console.log(`${firstName} will drink Chocy Milk`);
     */
//condition ? exprIfTrue : exprIfFalse

/////Truthy and Falsey and equality operators

//falsey values: null, 0, undefined, '', NaN
//Truthy values: Anything not above this line
/* 
let height = 22;

if (height == '22') {
    console.log('Hey this is type coercion!');
} else {
    console.log('No type coercion with triple ===');
} */

//////Functions
function calculateAge(birthYear){
    return 2019 - birthYear;
}
//functionCall(arguement goes here);  ex:calculateAge(2002);

/* function noArg(){
    console.log('something');
}
noArg(); */

let galloBirth = 2002;
const ageGallo = calculateAge(2002);
const ageIlsa = calculateAge(2003);
const ageThami = calculateAge(2004);
//console.log(ageGallo, ageIlsa, ageThami);

let firstName = 'Brendan';
function yearsUntilRetire(year, firstName){
    let age = calculateAge(year);
    let retirement = 65 - age;

    console.log(`${firstName} retires in ${ retirement} years`);
}
yearsUntilRetire(2002 , firstName);
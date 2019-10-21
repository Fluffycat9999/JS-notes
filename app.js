/* //////PRIMITIVES
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

////////IF ELSE STATEMENTS

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


/////TERNARY OPERATOR
/* let firstName = 'Melkadze';
let age = 17;

age >= 21 ? console.log(`${firstName} will drink no no juice`) : console.log(`${firstName} will drink Chocy Milk`);
     */
//condition ? exprIfTrue : exprIfFalse

/////TRUTHY AND FALSEY AND EQUALITY OPERATORS

//falsey values: null, 0, undefined, '', NaN
//Truthy values: Anything not above this line
/* 
let height = 22;

if (height == '22') {
    console.log('Hey this is type coercion!');
} else {
    console.log('No type coercion with triple ===');
} */

//////FUNCTIONS
/* function calculateAge(birthYear){
    return 2019 - birthYear;
} */
//functionCall(arguement goes here);  ex:calculateAge(2002);

/* function noArg(){
    console.log('something');
}
noArg(); */

/* let galloBirth = 2002;
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
console.log(age);
yearsUntilRetire(2002 , firstName); */

//function whatDoYouDo(job, firstName){}; Function declaration without definition/ expression

/* let whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teachers children';
        case 'driver':
            return firstName + ' drivers people';
        case 'designer':
            return firstName + ' designers things';
        default:
            return firstName + ' is broke and homeless';
    }
}

console.log(whatDoYouDo('teacher','Thami'));
console.log(whatDoYouDo('driver', 'Veda'));
console.log(whatDoYouDo('musician', 'Rob')); */

//////Arrays
//Initializing an array
/* let names = ['Brian', 'Andrew', 'Winny', 'Kai'];
let numbers = [1,25,6,7,8];
let crazyArray = ['string', 203, true];
/*console.log(names[0]);
console.log(names.length);

names.forEach(function(el){
    console.log(el);
});

names.push('Melkadze sir');

const namePairs = [names[0] + names[1],
names[2] + names[3]];
console.log(namePairs); */



/////OBJECTS AND METHODS
/*const spiderman = {
    alias: 'Spider-man',
    firstName: 'Peter',
    lastName: 'Parker',
    age: 16,
    goodGuy: true,
    location: {
        state: 'NY',
        city: 'NYC',
    },
    getBirthYear: function(){
        //return 2019 - this.age;
        console.log(this);
    }
}
spiderman.getBirthYear();
console.log(spiderman.getBirthYear);

const me = Object.create(spiderman);
me.alias = 'Superman';
console.log(me); */




/////LOOPS/ITERATIONS
/*const cars = ['Ford', 'Chevy','Honda', 'Toyota'];
for (i = 0; i < cars.length; i++){
    console.log(cars[i]);
} 
cars.forEach(function(car){   ///for can be written as a forEach
    console.log(`${car}`);
})*/


/////HOISTING, SCOPE, EXECUTION STACK AKA JAVASCRIPT YOU DON'T SEE
/* function test1(){
    console.log('test1');
    function test2(){
        console.log('test2');
        function test3(){
            console.log('test3');
        }test3();
    }test2();
}
test1(); */

///Hoisting
/* test1(); /// its a funtion is can be hoisted
notHoisted(); /// its not a function, but a variable so it needs to come after the variable

function test1(){
    console.log('This is hoisted?');
}
const notHoisted = function(){
    console.log('Im not hoisted');
} */


//////this keyword
/* function test1(){
    console.log(this);
};
test1(); */

/* const spiderman = {
    alias: 'Spider-man',
    firstName: 'Peter',
    lastName: 'Parker',
    age: 16,
    goodGuy: true,
    location: {
        state: 'NY',
        city: 'NYC',
    },
    getBirthYear: function(){
        //return 2019 - this.age;
        console.log(this);
    }
}
//this points to our object
//spiderman.getBirthYear();

function Hero(alias, powers, age){
    this.alias = alias;
    this.powers = powers;
    this.age = age;
}
const batman = new Hero('Batman', 'Wealthy', 44);
console.log(batman); */




///// CLASS
/*class Album {
    constructor(title, artist, yearReleased){
        this.title = title;
        this.artist = artist;
        this.yearReleased = yearReleased;
    }
    calcAge(){  //this is a method, which is a function inside a function, also to use it just write console.log(abbeyRoad.calcAge) and then it will work
        return (new Date().getFullYear() - this.yearReleased);
    }
     //instead of return you can use an arrow function, which apparently we don't know how to do so we are using return still
}

const abbeyRoad = new Album('Abbey Road', 'The Beatles', 1969); //Instantiate new album
//const srgtPepper = new Album('Sergeant Pepper', 'Beatles', 1970);
//console.log(abbeyRoad);

class CD extends Album {
    constructor(title, artist, yearReleased, digital){
        super(title, artist, yearReleased); //super takes the 'this' from the Album so we don't have to write it all again
        this.digital = digital;
    }
}
 */

 /////CHALLENGE
/* class Person {
    constructor(age, name){
        this.age = age;
        this.name = name;
    }
    calcBirthYear(){
        return (new date().getFullYear() - this.age);
    }
}
const Winny = new Person(17, 'Winny');
console.log(Winny.calcBirthYear()); */



//one class to create the object person, album, movie ***Model
//take arguments

//***View */ class for the UI which contains methods(user interface)
//create/insert the html for the UI DISPLAY 

//clear fields method

//remove something/object


//Controller combines UI and model
//event handler with function
//get values


//instatiate new class/object album with variable name

//instantiate new UI const ui = new UI()


//call relevant methods


//separate event handler for removing/deleting
/* class UI{
    
} */


//Challenge 2
/* var found = comments.find(function(id) {
    return id = 542328;
});
console.log(found); */





/////ASYNC
/* const second = () => {
    setTimeout(() => {
        console.log('Async Hey there');
    }, 2000);
}
const first = () => {
    console.log('Hey there');
    second(); //get data from server or api
    console.log('The end');
} */

/* function getPkmn(){
    fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
    .then(result => result.json())
    .then(data => console.log(data.abilities));
}
getPkmn(); */

async function getPkmn(){
    try{
    const result = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const data = await result.json();
    console.log(data);

    }catch (err){
        console.log(err);
    }
}
getPkmn();
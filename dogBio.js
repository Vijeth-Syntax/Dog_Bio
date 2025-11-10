// Day 7 Challenge :-
const myName = "Dev Rockey";
const luckyNumber = 1;

let nextYearLuckyNumber = luckyNumber + 10;
let remaninder = nextYearLuckyNumber % 5;
console.log("Hello, my name is " + myName + " .");
console.log(`My current lucky number is ${luckyNumber}.`);
console.log(`My current lucky number + 10 is ${nextYearLuckyNumber}.`);
console.log("The remainder when dividing that by 5 is " + remaninder + " .");

// Day 8 Challenge :-
const birthYear = 2009;
const currentYear = 2025;
let age = currentYear - birthYear;
if (age < 25) {
  console.log("Still early in the career");
} else {
  console.log("Well into the career phase.");
}

const interestsCount = 5;
for(i=0; i<interestsCount; i++) {
    console.log("Interests number "+[i+1]+" checked!");
}

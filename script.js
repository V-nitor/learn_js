// Warning= For made variable, avoid the sign "-" (because JS consider this a subtraction) n' "_" (because it's doen't practical). It's recommanded to use a MAJ to distinguish words (=Camel Case) in JS at the bottom (watch out of the spelling, in JS it's VERY important!)
let OrdinaryVariable= '"I am a big useless message"';
// Info= In JS, ("") and ('') it's the same thing. But small tip, if you want comment: 'let's go' write instead 'let\'s go' okay?

// Info= Good to know, the old JS and the new JS work always in the time
var calculation= 856;
const lmao= "It is funny, right?";
// Warning= "const=Constancy. It mean value doesn't change whatever happens" at the top

// Info= To change (& put) a variable, just put this name and write this new(s) value(s)
calculation= 741;
console.log(calculation);
calculation= 4;
// Tip= In HTML's console in question, type "console.log(calculation)" to update the real value in RL to the top

// It called= "Concatenation" at the bottom
let combination= "Present you variable: " + OrdinaryVariable + ". It was the contents, thx";
console.log(combination);
// Info= Use Back tick for VERY BIG concatenation at the bottom
let bigCombin= `Repeat you: ${OrdinaryVariable} . It was the method 2, thx`;
console.log(bigCombin);
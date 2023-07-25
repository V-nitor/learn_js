// Warning= For made variable, avoid the sign "-" (because JS consider this a subtraction) n' "_" (because it's doen't practical). It's recommanded to use a MAJ to distinguish words (=Camel Case) in JS at the bottom (watch out of the spelling, in JS it's VERY important!)
let OrdinaryVariable= '"I am a big useless message"';
// Info= In JS, ("") and ('') it's the same thing. But small tip, if you want comment: 'let's go' write instead 'let\'s go' okay?

// Info= Good to know, the old JS and the new JS work always in the time
var calculation= 856;
const lmao= "It is funny, right?";
// Warning= "const=Constancy. It mean value doesn't change whatever happens" at the top

// Info= To change (& put) a variable, just put this name and write this new(s) value(s) at the bottom
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

// **** Recap and Meaning/Sense ****
let string= 'Def pour chaîne de caractère';
let number= 92;
// let boolean= "var which reply 'true' or 'false' just only" at the bottom
let boolean= false;
// Info= "'let array' is a TABLE!" at the bottom
let array= ["code", 43210, true];
// Info= "'let object' have always a key followed by a value"s at the bottom
let object= {
    name: "Christian",
    surname: 'Chevalier',
    age: 32,
    country: "France",
}
// Info= "Just the: ';' mean this value exist but for the moment useless" at the bottom
let EmptyBox;

// **** Recap on operator in IT ****
console.log(7 + 5);
console.log(7 - 5);
console.log(7 * 5);
console.log(7 / 5);
// Info= ** is [?] to the power of [?]
console.log(7 ** 5);

// **** Operator plus ****
var total= 0;
total++;
total--;
// Info= "The: '++' mean (for our example) 'total + 1' and the '--' mean 'total - 1' this time" to the top
total += 8;
// Info= To the top, replace by 'total + 8' for example
// Info= At the bottom, replace by 'total * 6' for example
total *= 6;
const AnswerTotal= "Let's see the real total: '" + total + "'";
console.log(AnswerTotal);

// **** Control ****
let x= 1;
let y= 9;

if (x > y) {
    console.log("x win victorious versus y");
} else if (y > x) {
    console.log("y win unfortunately versus x");
} else {
    console.log("No contest");
}
// Info= "If all options are 'false', therefore write 'else' at the code's end WITH NO MORE details. Because no need" at the top

if (EmptyBox) {
    console.log('EmptyBox exist!');
} else {
    console.log("EmptyBox doesn't exist!?")
}
// Tip= Method used to be sure if this variable really exist in our code (only if there is at least 1 value) to the top

// Warning= To test the equality ONLY WITH THE SAME TYPE & VALUE, we used '===' and ABSOLUTELY NOT '=' because it mean "pass value to right at left and AFTER test" at the bottom
if (x === y) {
    console.log("Tie!")
}

// Warning= To test the equality WITH THE VALUE WITHOUT TAKE TYPE INTO CONSIDERATION, we used '==' at the bottom
if (x == y) {
    console.log("x and y have equal (ONLY in value)")
} else {
    console.log("x and y haven't equal (ONLY in value)")
}
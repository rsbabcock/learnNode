#!/usr/bin/env node

// Create a JavaScript file to act as a Node.js program named args.js. This program should accept at least one number as a command-line argument. The arguments should be summed up into a single value.

// Don't worry about floating point rounding errors.

// Expected:

// $ ./args.js 1
// 1
// $ ./args.js -.42 0 3.14
// 2.72
// $ ./args.js .1 .2
// 0.30000000000000004

// this is code from Greg, For some reason it doesn't work if you don't pass an argument
// which I don't understand
let inputs = process.argv.filter((v, i) => i > 1);
console.log(inputs)
if(inputs === []){
    console.log('You have not passed any arguments on the command line');
    return 0;
} 
if(inputs !== []){
    let total = inputs.map(Number).reduce((a, b) => a + b);
    console.log('The sum of the arguments is', total);
}
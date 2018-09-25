/*Create a file called cheer.js that performs a cheer, 
using a named passed to it. Use as many of these as you can, 
even if the code you write isn't as compact or 'efficient' as you would like. 
This is more about trying out some ES6 than being succinct.

const and/or let
Object literal shorthand
Destructuring assignments
Fat arrow function(s)
Spread operator
Template literals
Execute the file by typing node cheer.js inside the file's directory. */

const cheer = (cheer) => {
    // loop over input
    // if letter is a vowel use "an"
    let cheerArray = [...cheer]
    console.log(cheerArray)
    function cheerer(an, letter){ console.log(`GIVE me ${an} ${letter}!`)}
    vowels = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < cheerArray.length; i++) {
        if (cheerArray[i] === vowels[0]
            || cheerArray[i] === vowels[1]
            || cheerArray[i] === vowels[2]
            || cheerArray[i] === vowels[3]
            || cheerArray[i] === vowels[4]) {
            cheerer("an", cheerArray[i])
        }
        else cheerer("a", cheerArray[i])
    }
    console.log("What does that spell?")
    console.log(`${cheer.toUpperCase()}!`)
}

cheer("Victory")
#!/usr/bin/env node

printVersion = () => {
    console.log(`Node.js version: ${process.version}`)
    console.log(`v8 version: ${process.versions.v8}`)
}

printVersion()


const bold = string => `\u001b[1m${string}\u001b[22m`
const green = string => `\u001b[32m${string}\u001b[39m`
const red = string => `\u001b[31m${string}\u001b[39m`
console.log(`It is ${red('easier')} to use ${green('functions for')} ${green(bold('ANSI'))} codes!`)




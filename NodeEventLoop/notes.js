// /*
// Can you explain the node.js event loop - Stephanie Provence
// Javascript we write => Node.js => (v8, libuv)
// v8 - engine that chrome runs off of
// libuv - c++ library = concurrency, underlying file system


// Node:

// fs = 
// http = 
// crypto = 
// path = 

// pbkdf2 function => hash
// lib folder => holds the javascript stuff
// src => c++ 
// threads = node is single threaded 

// thread(){
//     - Are run by a computer -
//     look at pictures of dogs
//     scroll through twitter
//     close twitter
//     open twitter again
// }
// threads are instructions
// scheduling is controled by your operating system

// -------> THE EVENT LOOP <------------
// */

// // node eventloop.js
// const pendingTimers = []
// const pendingOSTasks = []
// const pendingOperations = []
// // this is what happens in the REPL

// eventloop.runContents()

// function shouldContinue(){
//     // check one: any pending setTimeout, setInterval, setImmediate?
//     // check two: any pending OS tasks? (like a server listening on a port)
//     // check three: any pending long running operations? (like fs module)
//     return pendingTimers.length | 
// }
// // entire body executes in one 'tick'
// // while represents event loop
// while shouldContinue(){
//     // 1) Node looks at pending Times and sees if any functions are ready to be called
//     // 2) Nodes looks at pending OSTasks and pending Operations and calls relevant callbacks
//     // 3) Pause execution. Continue when...
//         // new pending OSTask is done
//         // a new pending Operation is done
//         // 
// }

// Exit back to terminal
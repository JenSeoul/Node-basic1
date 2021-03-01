// const EventEmitter = require('events');

// // Create class
// class MyEmitter extends EventEmitter { }

// // Init obj
// const myEmitter = new MyEmitter();

// // Event listener
// // myEmitter.once('newListener', (event, listener)=>{
// //     if (event === 'event'){
// //         myEmitter.on('event', ()=>{
// //             console.log('Event fired');
// //         });
// //     }
// // });
// myEmitter.on('event', ()=> console.log('Event Fired!!'))

// // Init event
// myEmitter.emit('event');
const EventEmitter = require('events');
const Logger = require('./logger');
const logger = new Logger();

// Register a listener
// emitter.on('messageLogged', (arg)=>{
//     console.log('Listener called',arg)
// });
// Register a emitter
// emitter.emit('messageLogged', {id: 1, url:'http://'});

// Raise: logging (data: message)

// Register a listener
logger.on('loggingoccured', (argument)=>{
    console.log('loggingoccured', argument)
})
logger.log('message')
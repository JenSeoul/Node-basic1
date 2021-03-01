const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter { }

// Init obj
const myEmitter = new MyEmitter();

// Event listener
// myEmitter.once('newListener', (event, listener)=>{
//     if (event === 'event'){
//         myEmitter.on('event', ()=>{
//             console.log('Event fired');
//         });
//     }
// });
myEmitter.on('event', ()=> console.log('Event Fired!!'))

// Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');


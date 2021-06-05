//var emitter = require('./emitter'); // this is our custome event emitter
// var emitter = require('events');  // this is node event emitter
// var eventsConfig = require('./config').events;
// var emr = new emitter();

// emr.on(eventsConfig.GREET,()=>{console.log("Someone greets")});

// emr.on(eventsConfig.GREET,()=>{console.log("another greet")});

// console.log("Hello");

// emr.emit(eventsConfig.GREET);

var buff = new Buffer("Hello","utf8");
console.log(buff);
console.log(buff.toString());

var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;

console.log(view);
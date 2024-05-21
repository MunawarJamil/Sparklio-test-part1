/*
EVENT LOOP IN NODE JS 

event loop iN Node.js performs non-blocking I/O operations

there are mainly four concepts in event loop 

1: Continuous Execution
2: Asynchronous Operations
3)Multiple Queues
4)Task Execution

1: Continuous Execution
  Node.js' event loop manages asynchronous tasks by consistently checking for new events during task execution.

2: Asynchronous Operations
 it is responsible for managing all asynchronous tasks, guaranteeing non-blocking behavior.

3)Multiple Queues Within each event loop iteration, six distinct queues handle various task types.

4) Execution of Tasks: Tasks in the event queue are processed sequentially, ensuring that lengthy tasks do not impede the execution of others due to Node.js' non-blocking architecture.
 
*/

console.log("Start of the script");
setTimeout(() => {
  console.log("Timeout callback executed");
}, 0);

setImmediate(() => {
  console.log("Immediate callback executed");
});

process.nextTick(() => {
  console.log("Next tick callback executed");
});

console.log("End of the script");

// even if timer set for 1 ms , can't guarantee immediately after 1ms 
// it will execute if too many events in eventQueue are waiting to process

// for instance setTimeout means WAIT A MINIMUM OF TIME, DOESN'T 
// GUARANTEE EXECUTION

setTimeout(() => {
  console.log("setTimeout 3");
},10) // waiting >=10 ms means   execute AFTER no delay settimeouts  

setTimeout(() => {
  console.log("setTimeout 1");
},6) // waiting <7 ms means can execute before no delay settimeouts  

    console.log("LOOP");

    console.log("LOOP");
    console.log("LOOP");
    console.log("LOOP");
    console.log("LOOP");
    
setTimeout(() => {
  console.log("setTimeout 2");
})
// while(true)
// {
//     console.log("LOOP");
// }

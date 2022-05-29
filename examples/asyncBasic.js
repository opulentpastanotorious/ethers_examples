// async func always returns before sync funcs

setTimeout(() => {
  console.log("Async");
}, 0)

  console.log("Sync");

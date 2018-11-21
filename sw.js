console.log("first time call");

self.addEventListener("message", event => {
  let data = event.data;
  //console.log('Event:', event);
  if (data.command == "oneWayCommunication") {
    console.log("One way: ", data.message);
  }

  if (data.command == "twoWayCommunication") {
    console.log("Two way: ", data.message);

    event.ports[0].postMessage({
      message: {
        some: "blob",
        contains: "stuff"
      }
    });
  }
});

// const stan = require("node-nats-streaming").connect("test-cluster", "backend");

// let listenerEvents = io => {
//   stan.on("connect", function() {
//     let opts = stan.subscriptionOptions();
//     let subscription = stan.subscribe("buffer", opts);
//     subscription.on("message", function(message) {
//       io.emit("buffer", message.getData());
//     });
//   });
// };

// module.exports = listenerEvents;

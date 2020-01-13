// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");
// const path = require("path");

// const app = express();
// const server = require("http").Server(app);
// // const io = require("socket.io")(server);

// const listenerEvents = require("./services/nats");
// const reverseGeocoder = require("./services/reverseGeocoder");

// // app.use((req, res, next) => {
// //   req.io = io;
// //   next();
// // });

// // io.on("connection", function(socket) {
// //   console.log("a client connected");
// // });

// app.use(cors());
// app.use(express.json({ limit: "50mb" }));

// app.use(
//   "/files",
//   express.static(path.resolve(__dirname, "..", "uploads", "resized"))
// );

// app.use(require("./routes"));
// // listenerEvents(io);
// reverseGeocoder(null, null);

// server.listen(process.env.PORT_SERVER);

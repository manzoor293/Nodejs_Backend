const EventEmitter = require("events");
const http = require("http");

// create class ES6
class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

// const myEmitter = new EventEmitter(); instead of that method we use ES6 method to run exactly same!

myEmitter.on("newSale", () => {
  console.log("There was a new Sale!");
});

myEmitter.on("newSale", () => {
  console.log("Customer name: Manzoor-Ahmad");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There was now ${stock} items left in stock!`);
});

myEmitter.emit("newSale", 9);

//////////////////////////////////////
const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request Received!");
  console.log(req.url);
  res.end("Request Received-1");
  server.close();
});

server.on("close", () => {
  console.log("server closed!");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for request....");
});

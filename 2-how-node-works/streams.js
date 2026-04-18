const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // Solution 1 without streams
  // fs.readFile("Lec_02_Intelligent_Agents.pdf", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });

  // Solution using Streams method
  // const readable = fs.createReadStream("test-file.txt");
  // readable.on("data", (chunk) => {
  //   res.write(chunk);
  // });
  // readable.on("end", () => {
  //   res.end();
  // });
  // readable.on("error", (err) => {
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end("File not found!");
  // });

  // Solution 3 using .pipe() method

  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  // readableSource.pipe(writeableDest)
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server Listening...");
});

const http = require("node:http");

const server = http.createServer((req,res)=>{
  res.writeHead(200);
  res.end("Hello word");
});

server.listen(3000,()=>{
  console.log("running on port 3000")
})
//create server
///terminal -> node index.js

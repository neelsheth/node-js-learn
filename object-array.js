const http = require("node:http");
const data = [{
  name:'neel',
  surname:'sheth',
},{
  name:'neel',
  surname:'sheth',
},{
  name:'neel',
  surname:'sheth',
},{
  name:'neel',
  surname:'sheth',
},{
  name:'neel',
  surname:'sheth',
},{
  name:'neel',
  surname:'sheth',
},{
  name:'neel',
  surname:'sheth',
},{
  name:'neel',
  surname:'sheth',
}]
const server = http.createServer((req,res)=>{
  // console.log(req)
  res.writeHead(200,{"Content-type":"application/json"});
  res.end(JSON.stringify(data));
});

server.listen(3000,()=>{
  console.log("running on port 3000")
})

///terminal -> node index.js

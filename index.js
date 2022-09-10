var http = require("http");
var server = http.createServer(function(req,res){
   res.end("Hellow  World")

})
server.listen(5000);
console.log("Server run successfull");git
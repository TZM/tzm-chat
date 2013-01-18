var server = require('http').createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('TZM Chat Server\n');
});
server.listen(9080);

var nowjs = require("now");
var everyone = nowjs.initialize(server);

everyone.now.distributeMessage = function(message){
  console.log('User '+this.now.name+' added message ' +message);
  everyone.now.receiveMessage(this.now.name, message);
};
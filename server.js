var http = require('http')
var server=7000

http.createServer( (req,res) => {
    res.writeHead(200,{'Content-type':'text/html'})
    res.write("Olá!")
    res.end()
}).listen(server,()=>{
   console.log('Servidor á escuta na porta ' + server) 
})

var http = require('http')
var fs = require('fs')
var server=7000

http.createServer( (req,res) => {
    res.writeHead(200,{'Content-type':'text/html'})

    fs.readFile('./dados/index.html',(erro,dados)=>{
        
        if(!erro){
            res.write(dados)
        }else{
            res.write(erro)
        }

        res.end()
    })
    
}).listen(server,()=>{
   console.log('Servidor á escuta na porta ' + server) 
})

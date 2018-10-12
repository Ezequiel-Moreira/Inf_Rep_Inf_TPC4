var http = require('http')
var fs = require('fs')
var url = require('url')
var server=7000

http.createServer( (req,res) => {
    res.writeHead(200,{'Content-type':'text/html'})

    var parsedUrl = url.parse(req.url,true)
    var q = parsedUrl.query    
    if(q.id){
        fs.readFile('./dados/html/obra' + q.id + '.html', (erro,dados)=>{
            if(!erro){
                res.write(dados)
            }else{
                //res.write(erro)
                console.log(erro)
            }
    
            res.end()    
        })
    }else{
        fs.readFile('./dados/index.html',(erro,dados)=>{
            
            if(!erro){
                res.write(dados)
            }else{
                res.write(erro)
            }

            res.end()
        })

    }    
    
}).listen(server,()=>{
   console.log('Servidor á escuta na porta ' + server) 
})

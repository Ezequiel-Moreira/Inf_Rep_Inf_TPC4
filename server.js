var http = require('http')
var fs = require('fs')
var url = require('url')
var server=7000

http.createServer( (req,res) => {
    res.writeHead(200,{'Content-type':'text/html'})

    var parsedUrl = url.parse(req.url,true)
    console.log(parsedUrl)
        
    var path=parsedUrl.pathname.split('/')
    console.log(path)
    console.log(path[1])

    
    var q = parsedUrl.query  
    console.log(q)
    console.log(q.id)

    if(path[1]=='obras'){
        console.log('obras')
        fs.readFile('./dados/index.html',(erro,dados)=>{       
            if(!erro){
                res.write(dados)
            }else{
                res.write(erro)
            }
            res.end()
        })
    }else if(path[1]=='obra'){
        console.log('obra')
        if(q.id){  
            fs.readFile('./dados/html/obra' + q.id + '.html', (erro,dados)=>{
                if(!erro){
                    res.write(dados)
                }else{
                    console.log('erro de id')
                    console.log(erro)
                    res.writeHead(302,{'Location':'localhost:' + server + '/obras'})
                    res.end()                
                }
                res.end()    
            })
        }else{
            console.log('erro de id')
            res.writeHead(302,{'Location':'localhost:' + server + '/obras'})
            res.end()                            
        }  
    }else{
        console.log('default')
        res.writeHead(302,{'Location':'localhost:' + server + '/obras'})
        res.end()                        
    }


}).listen(server,()=>{
   console.log('Servidor á escuta na porta ' + server) 
})

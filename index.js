const http = require("http");
const fs = require("fs"); //file system

const server = http.createServer( (req, res)=> {
    res.setHeader('Content-Type',"text/html");

    let path = "./views/"; 
    switch(req.url){ //checks request
        case '/':
            path+="index.html"
            break;
        case '/about':
            path+="about.html";
            break;
        default:
            path+="404.html";
            break;
    }

    fs.readFile(path, (err, data) =>{//reads the index.html 
        if (err){
            console.log(err);
            res.end(); 
        } else { 
            res.end(data) ;
        }
    })
})

server.listen(3000, 'localhost', ()=>{
    console.log('let dsfs'); 
})
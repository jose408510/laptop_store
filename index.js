const fs = require('fs');
const http = require('http')
const url = require('url')


const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8')

const laptopData = JSON.parse(json);

const server = http.createServer((req,res) => {

   const pathname = url.parse(req.url, true).pathname

   if(pathname === '/products' || pathname === '/') {
    res.writeHead(200, { 'Content-type': 'text/html'});
    res.end('This is the products page')
   }else if (pathname === '/laptop'){
    res.writeHead(200, { 'Content-type': 'text/html'});
    res.end('This is the laptop page')
   }else {
    res.writeHead(404, { 'Content-type': 'text/html'});
    res.end('Was not found on the server')
   }
})

server.listen(3000 , 'localhost' , () => {
    console.log('Listening for request now ')
})
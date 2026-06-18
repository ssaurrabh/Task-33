

const http = require('http')
const fs = require('fs')
const path = require('path')

const PORT = 8000

http.createServer((req, res) => {

    if (req.url === '/home') {
        
        fs.readFile(path.join(__dirname, 'pages', 'index.html'),(err,data)=>{
            if (err){
                res.statusCode = 500
                res.setHeader('Content-Type', 'text/plain')
                res.end('Internal Server Error')
            }else{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html')
                res.end(data)
            }
        })
    } else if (req.url === '/style.css') {
        fs.readFile(path.join(__dirname, '/style.css'), (err, data) => {
            if (err) {
                res.statusCode = 404
                res.setHeader('Content-Type', 'text/plain')
                res.end('CSS file not found')
            } else {
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/css')
                res.end(data)
            }
        })
    } else if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'pages', 'about.html'),(err, data)=>{
            if(err){
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/plain')
                res.end('About Page Not Found')
            }else{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html')
                res.end(data)
            }
        })
    }else if(req.url === '/contact'){
        fs.readFile(path.join(__dirname, 'pages', 'contact.html'),(err,data)=>{
            if(err){
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/plain')
                res.end('Contact Page not Found')
            }else{
                res.statusCode = 200;
                res.setHeader('Content-Type','text/html')
                res.end(data)
            }
        })
    }else if(req.url === '/images/razor.png'){
        fs.readFile(path.join(__dirname, '/images/razor.png'),(err, data)=>{
            if(err){
                res.statusCode = 404;
                res.setHeader('Content-Type','text/plain')
                res.end('Image not found')
            }else{
                res.setHeader('Content-Type','image/png')
                res.end(data)
            }
        })
    }

    else {
       fs.readFile(path.join(__dirname, 'pages', 'notfound.html'),(err,data)=>{
        if(err){
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain')
            res.end('Page not Found')
        }else{
            res.statusCode = 404;
            res.setHeader('Content-Type','text/html')
            res.end(data)
        }
       })
    }


}).listen(PORT, () => {
    console.log(`Server is started at port http://localhost:${PORT}`);

})
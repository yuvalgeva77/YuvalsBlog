const path=require('path')
const express=require('express')
const app=express()
const { config, engine } = require('express-edge');
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/blog')


app.use(express.static('public'))
app.use(engine);
app.set('views', `${__dirname}/views`);


app.get('/',(req,res)=>{
res.render('index') //inedx.edge

})

app.get('/about',(req,res)=>{
    res.render('about') //about.edge

    })

    app.get('/contact',(req,res)=>{
        res.render('contact') //about.edge
    
        })
app.listen(3000,()=>{
    console.log('app listening in port 3000')
})



// const http = require('http');
// const fs=require('fs')

// const aboutPage=fs.readFileSync('about.html')
// const contactPage=fs.readFileSync('contact.html')
// const homePage=fs.readFileSync('index.html')

// const server= http.createServer((request,response)=>{
// console.log(request.url)

// if(request.url=='/about'){
// return response.end(aboutPage)
// }
// else if(request.url=='/contact'){
//     return response.end(contactPage)
// }
// else if(request.url=='/'){
//     return response.end(homePage)
// }
// else{
//     response.writeHead(404)
//     response.end('this page is not found')
// }




// })

// server.listen(3000)
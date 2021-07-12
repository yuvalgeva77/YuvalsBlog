const path=require('path')
const express=require('express')
const app=express()

app.use(express.static('public'))

app.get('/',(req,res)=>{
res.sendFile(path.resolve(__dirname,'pages/index.html'))

})

app.get('/about',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/about.html'))

    })

    app.get('/contact',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'pages/contact.html'))
    
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
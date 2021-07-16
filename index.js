const path = require('path')
const express = require('express')
const app = express()
const { config, engine } = require('express-edge');
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/blog')
// const bodyParser = require('body-parser');
// const { urlencoded } = require('body-parser');
const Post=require('./database/models/Post')
const fileUpload = require('express-fileupload');

app.use(express.static('public'))
app.use(engine);
app.set('views', `${__dirname}/views`);
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(fileUpload());

app.get('/', async(req, res) => {
    const allPosts=await Post.find({})
    //console.log(allPosts)
    res.render('index',{
        allPosts
    }) //inedx.edge

})
app.get('/post/:id', async(req, res) => {
    console.log(req.params)
    const post=await Post.findById(req.params.id)

    console.log(post)
    res.render('post',{
        post
    }) 

})

app.get('/about', (req, res) => {
    res.render('about') //about.edge

})

app.get('/contact', (req, res) => {
    res.render('contact') //about.edge

})

app.get('/posts/new', (req, res) => {
    res.render('create') //create.edge

})

app.post('/posts/store', (req, res) => {
       // console.log(req.body)
        //console.log(req.files)
        const{image}=req.files
        image.mv(path.resolve(__dirname,'public/posts', image.name),(error)=>{
            console.log(path.resolve(__dirname,'public/posts', image.name))
            Post.create(req.body,(error,post)=>{
                res.redirect('/')

        });

    });
});

app.listen(3000, () => {
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
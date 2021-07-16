const express = require('express')
const app = express()
const { config, engine } = require('express-edge');
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/blog')
const fileUpload = require('express-fileupload');
const validatePostMiddleware=(req,res,next)=>{
    if(!req.body.title||!req.body.username||!req.body.description||!req.body.content||!req.files.image){
        return res.redirect('/posts/new')
    }
    next()
}
const createPostController=require('./controllers/createPost')
const getPostController=require('./controllers/getPost')
const homePageController=require('./controllers/homePage')
const storePostController=require('./controllers/storePost')
const aboutPageController=require('./controllers/aboutPage')
const contactPageController=require('./controllers/contactPage')


app.use(express.static('public'))
app.use(engine);
app.set('views', `${__dirname}/views`);
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(fileUpload());
app.use('/posts/store',validatePostMiddleware)//activate validatePostMiddleware only before /posts/store

app.get('/', homePageController)
app.get('/post/:id', getPostController)
app.get('/about',aboutPageController )
app.get('/contact', contactPageController)
app.get('/posts/new',createPostController);
app.post('/posts/store', storePostController);

app.listen(3000, () => {
    console.log('app listening in port 3000')
})


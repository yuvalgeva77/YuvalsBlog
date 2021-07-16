const express = require('express')
const app = express()
const { config, engine } = require('express-edge');
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/blog')
const fileUpload = require('express-fileupload');
const validatePost=require('./middleware/storePost')
const createPostController=require('./controllers/createPost')
const getPostController=require('./controllers/getPost')
const homePageController=require('./controllers/homePage')
const storePostController=require('./controllers/storePost')
const aboutPageController=require('./controllers/aboutPage')
const contactPageController=require('./controllers/contactPage')
const registerPageController=require('./controllers/registerPage')
const newUserController=require('./controllers/newUser')


app.use(express.static('public'))
app.use(engine);
app.set('views', `${__dirname}/views`);
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(fileUpload());
app.use('/posts/store',validatePost)//activate validatePostMiddleware only before /posts/store

app.get('/', homePageController)
app.get('/post/:id', getPostController)
app.get('/about',aboutPageController )
app.get('/contact', contactPageController)
app.get('/posts/new',createPostController);
app.post('/posts/store', storePostController);
app.post('/users/new', newUserController);

app.get('/register',registerPageController)
app.listen(3000, () => {
    console.log('app listening in port 3000')
})


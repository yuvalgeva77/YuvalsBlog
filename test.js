const mongoose=require('mongoose')
const Post=require('./database/models/Post')
const User=require('./database/models/User')
mongoose.connect('mongodb://localhost/test-blog')

//add record
Post.create({
    title:'My second blog post',
    description:'second post description',
    content:'bla bla bla wooho.',
    username: 'Yuval Geva',
    image: 'C:\Users\יובל\IdeaProjects\Blog\public\posts\DSC_0146.JPG',

},(error,post)=>{
    console.log(error,post)
})

User.create({
    username:'yuval',
    email:'yuval@asdasd',
    password:'1234.',
    image: 'C:\Users\יובל\IdeaProjects\Blog\public\posts\DSC_0146.JPG'
    
},(error,post)=>{
    console.log(error,post)
})

//find all
// Post.find({}, (error,post)=>{
//     console.log(error,post)
// })

//fing by 
// Post.find({
//     title:'My first blog post'
// },(error,post)=>{
//     console.log(error,post)
// })

//update
// Post.findOneAndUpdate("60eca87823690e339479705a",{
// description:'my firt post'
// }, (error,post)=>{
//     console.log(error,post)
//  })
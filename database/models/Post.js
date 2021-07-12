const mongoose=require('mongoose')

//users,posts,products

const PostScheme=new mongoose.Schema({
    title: String,
    description: String,
    content: String
})

const Post=mongoose.model('Post',PostScheme)
module.exports=Post
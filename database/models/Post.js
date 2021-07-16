const mongoose=require('mongoose')

//users,posts,products

const PostScheme=new mongoose.Schema({
    title: String,
    description: String,
    content: String,
    username: String,
    image:String,
    createdAt:{
        type: Date,
        default: new Date()
    }
})

const Post=mongoose.model('Post',PostScheme)
module.exports=Post
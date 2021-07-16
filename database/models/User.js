const mongoose=require('mongoose')

//users,posts,products

const UserScheme=new mongoose.Schema({
    username: {
        type: String,
        unique:true,
        required:[true,'Please set a username']
    },
    email: {
        type: String,
        required:[true,'Please provid an email']
    },
    password: {
        type: String,
        required:[true,'Please provid an email']
    },
    image: {
        type: String,
        required:[false]
    }
    
})

const Post=mongoose.model('User',UserScheme)
module.exports=Post
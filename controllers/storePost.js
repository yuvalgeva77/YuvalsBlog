const Post=require('../database/models/Post')
const path = require('path')

module.exports=(req, res) => {
    // console.log(req.body)
     //console.log(req.files)
     const {image}=req.files
     const uploadPath=path.resolve(__dirname,'..','public/posts', image.name)
     image.mv(uploadPath,(error)=>{
         //console.log(path.resolve(__dirname,'public/posts', image.name))
         Post.create({...req.body, image:`/posts/${image.name}`},(error,post)=>{
            
             res.redirect('/')

     });

 })
}
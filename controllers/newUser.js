const User=require('../database/models/User')
const path = require('path')

module.exports=(req, res) => {
    //  console.log(req.body)
    //  console.log(req.files)
     const {image}=req.files
     const uploadPath=path.resolve(__dirname,'..','public/users', image.name)
     image.mv(uploadPath,(error)=>{
         //console.log(path.resolve(__dirname,'public/posts', image.name))
         User.create({...req.body, image:`/users/${image.name}`},(error,post)=>{
        console.log(error)

         res.redirect('/')

     });

 })
}
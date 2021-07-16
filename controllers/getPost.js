const Post=require('../database/models/Post')
module.exports=async(req, res) => {
    console.log(req.params)
    const post=await Post.findById(req.params.id)

    console.log(post)
    res.render('post',{
        post
    }) 
}
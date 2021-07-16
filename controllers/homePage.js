const Post=require('../database/models/Post')
module.exports=async(req, res) => {
    const allPosts=await Post.find({})
    //console.log(allPosts)
    res.render('index',{
        allPosts
    }) //inedx.edge

}
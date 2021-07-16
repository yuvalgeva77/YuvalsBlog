module.exports=(req,res,next)=>{
    if(!req.body.title||!req.body.username||!req.body.description||!req.body.content||!req.files.image){
        return res.redirect('/posts/new')
    }
    next()
}
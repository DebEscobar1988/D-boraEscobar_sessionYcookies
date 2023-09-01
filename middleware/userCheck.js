module.exports = (req,res,next) => {

    if(req.session.userData){
       next()
}
res.redirect("/")
}
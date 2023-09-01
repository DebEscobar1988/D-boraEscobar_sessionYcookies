module.exports = (req,res,next) => {

    if(req.cookies.userColor){
        req.session.userData = req.cookies.userColor
}
next()
}
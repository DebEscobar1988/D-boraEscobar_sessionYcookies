const { validationResult } = require('express-validator');

module.exports = {
    index: (req,res)=>{
        res.render('index')
    },
    profile: (req,res)=>{
        res.render('profile')
    },
    processForm : (req,res)=>{
        const{name,email,color,age}= req.body
         const errors = validationResult(req);
         
         if(errors.isEmpty()){
        req.session.userData = {
            name,
            color,
            email,
            age,
        }
    
        if(req.body.remember !== undefined){
            res.cookie("userColor", req.session.userData,{ maxAge:60000})     
        }   
        return res.redirect('/')
    }else{
        res.render('index', {
        errors : errors.mapped(),
            old: req.body
    })
    }
},
    logout : (req,res)=>{
        req.session.destroy();
        res.cookie("userColor", null, {
            maxAge:-1
        })
        res.redirect('/')
    }
}
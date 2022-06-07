module.exports= (req,res,next)=>{
    if(req.cookies.userAprhodite){
       req.session.userLogin =req.cookies.userAprhodite;  
       console.log('cokie')
    }

    next()
}
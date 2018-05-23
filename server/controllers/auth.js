const jwt = require ("jsonwebtoken")

module.exports={
    authenticate:(req,res,next)=>{
        console.log('testing masuk sini ga')
        const auth=req.headers.token
        console.log(auth)
        jwt.verify(auth,process.env.secretkey,(err,decoded)=>{
            if(err){
                console.log("masuk sini?")
                return res.status(202).json(err)
            } 
            else{
                console.log("apa isinya disini?",decoded)
                next()
            }
        })
    },
}
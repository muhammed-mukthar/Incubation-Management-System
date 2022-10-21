const jwt=require('jsonwebtoken')

const verifyToken=(req,res,next)=>{
    const authHeader=req.headers.token
    console.log(req.headers);
    if(authHeader){
        const token=authHeader.split(" ")[1];
        jwt.verify(token,process.env.JWT_SEC,(err,user)=>{
             if(err) res.status(403).json({authError:true})
        req.user=user;
        next()
        });
    }else{
        return res.status(401).json('you are not authenticated')
    }
        };

        const verifyAdminToken=(req,res,next)=>{
            const authHeader=req.headers.admintoken;
            console.log(req.headers);
            if(authHeader){
                const token=authHeader.split(" ")[1];
                jwt.verify(token,process.env.JWT_SEC,(err,user)=>{
                     if(err){
                        console.log(err);
                         res.status(403).json({authError:true})
                         
                     }
                console.log('inside');
                next()
                });
            }else{
                 res.status(401).json('you are not authenticated')
                next()
            }
                };
                    


const verifyTokenandAuthorization=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.params.id|| req.user.isAdmin){
            next()
        }else{
            res.status(403).json('you are not allowed to to that!')
        }
    })
}

const verifyTokenandAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next()
        }else{
            res.status(403).json("you are not allowed to do that")
        }

    })
}
module.exports={verifyToken,verifyTokenandAuthorization,verifyTokenandAdmin,verifyAdminToken}
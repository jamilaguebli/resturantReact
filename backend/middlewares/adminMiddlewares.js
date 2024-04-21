const isAdmin=async(req,res,next)=>{
    try{
       if(req.body.isAdmin)
         next()
   
     } catch (error) {
         console.log(error)
         return res.status(400).json({msg:"error not admin"})
         
     }
 }
 
 module.exports= isAdmin
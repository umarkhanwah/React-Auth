import jwt from "jsonwebtoken"

export const fetchUser =  (req , res , next )=>{
    const token = req.header('my_accessToken');


    if(!token){
        res.status(401).json({message : "Please Login First "});
    }

    try {
        const data = jwt.verify(token , process.env.JWT_SecretCode);
        console.log(data);
        
        req.userId = data.id;
        next();
    } catch (error) {
        console.log(error.message);
        return res.status(401).json({message : "Invalid Token"});
        
        
    }

}
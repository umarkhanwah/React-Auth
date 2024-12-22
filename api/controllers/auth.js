import bcryptjs from 'bcryptjs';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

export const handleRegister = async  (req , res)=>{
    const {username  , email , password } = req.body;
	
   const hasedPassword = bcryptjs.hashSync(password , 10);

   const newUser = new User({username , email , password:hasedPassword});
    
    if(!username || !email || !password ){
        res.status(400).json({
            message : "Please Fill Al Fields"
        })
    }
    else{

        try {
            
            

            
            await newUser.save();
            res.status(201).json({
                message : "User Added Succesfully"
            })
        
            
    } catch (error) {
        res.status(500).json({
            message : error.message
        })
    }
    }
    
    console.log(req.body);


}



export const handleLogin  = async (req, res)=>{
    let {username , password} = req.body;
        
    // If any one of Field is empty
    if(!username || !password){
        res.status(400).json({message : "Please Fill All Fields", success : false});

    } else{
   
    try {
        
        // Check if the user exist with that username
        const validUser = await User.findOne({username});
        if(!validUser){
            return res.status(404).json({ message : "User Not Found" , success : false});

        } else{
            console.log(validUser);
            
            let validPassword  = bcryptjs.compareSync(password , validUser.password);
            if(!validPassword) {
                res.status(401).json({message : "Invalid Credentials" , success : false});
            }
            else{
                // Auth TOken ,
                const token  = jwt.sign({id : validUser._id} , process.env.JWT_SecretCode);
                // 'JWT_SecretCode' is a string variavle in .env ,
                //  it is customized at developer's choice  
                
                // Expiry Date for the token
                // let expDate = new Date( Date.now()) ;
                // expDate.setHours(expDate.getHours()+1000)
                // let {password , ...rest} = validUser._doc;
               
                // Setting the token in cookies
                // res.cookie('My_accessToken' , token , {httpOnly : true  , expires : expDate}  ).status(200).json(rest);
               console.log(token);
               
                res.status(200).json({token , success: true });

            }
        }        
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            message : error.message
        })
    }

}

}



export const getUserData = async (req , res)=>{
    try {
        let userID = req.userId;
        // console.log(userID);
        
        const user = await User.findById(userID).select("-password");
        res.send(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message : error.message})
            
    }
}
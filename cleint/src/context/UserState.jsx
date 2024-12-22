import React, {  useState } from 'react'
import UserContext from './userContext'

const UserState = (props) => {
    
    const [Auth, setAuth] = useState(false)


    // const checkUser =async ()=>{
        

    //     let authToken = await localStorage.getItem('token');
    //     console.log(authToken);
        
    //     if(authToken == null){
    //         setAuth(false)
    //     }
    //     else{
    //         setAuth(true)

    //     }
            
    //     console.log(Auth);
        
    // }
    const data = {
        Auth , setAuth
    }
    
    
  return (
    <UserContext.Provider value={data}>
        {props.children}
    </UserContext.Provider>
  )
}

export default UserState

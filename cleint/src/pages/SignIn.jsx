import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/userContext';

function Signin() {
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState({})
    const navigate = useNavigate();
    let {setAuth , Auth} = useContext(UserContext);



  let loginUser = async(event)=>{
    
    // Dispatch(signInStart())
    setloading(true)
    let response ;
   
      event.preventDefault();
      const {username , password} = event.target;

      await axios.post('/api/auth/login'  ,{
          username : username.value,
          password : password.value
      }).then((res)=>{
            localStorage.setItem('token'  ,res.data.token)
            navigate('/')
            // setAuth(true)
        // 👇 FOr Success
        response = res;
        //   Dispatch(signInSuccess(res))
          console.log(res.data);
          
        }).catch((err)=>{
            // Dispatch(signInFailure(err.response))
            console.log(err.response);
            response = err.response
        })
        await setAuth(response.status == 200)
        
        
        setloading(false)
        seterror(response)
  }



  return (
    <div className='d-flex vh-100 bg-dark  justify-content-center align-items-center'>
            {loading ? 
        <div className="spinner-border text-light p-5" role="status">
            <span className="visually-hidden">loading...</span>
        </div>
        : 
        <form action="" className='border  rounded-5 p-4 bg-light' onSubmit={loginUser}>
                    <h1 className="h1 text-center">Login</h1>
                <div className="mb-3">
                    <label  className="form-label">Username</label>
                    <input type="text" className="form-control" name='username'/>
                    
                </div>
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input type="password" className="form-control" name='password'/>
                    
                </div>
                <button type="submit" className='btn btn-dark mb-3 w-100'>Sign In</button>
                <p className='float-start'>Dont have an Account?</p>
                
                <a href="/Signup" className='float-end'>Sign Up</a>
                {
                error.status && (
                    <div className={`alert alert-${error.statusText == "Created" ? "primary" : "danger"} mt-4`} role="alert">
                        {error.data.message}
                    </div>
                    )
             
            }
        </form>
        }
    </div>
  )
}

export default Signin

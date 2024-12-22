import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const [Message, setMessage] = useState({})
    const [Loading, setLoading] = useState(false)
    const navigate = useNavigate();

    let submitData = async (event)=>{
        setLoading(true);
        let response;
        event.preventDefault();
        let {username , email , password } = event.target;
        await axios.post('api/auth/signup' , {
            username  : username.value,
            email   : email.value ,
            password  : password.value
        }).then((res)=>{
            navigate('/signin')
            response = res;
            console.log(res);
            
        }).catch((err)=>{
            console.log(err);
            response = err.response
        })
        setLoading(false)
        setMessage(response)
        
        
    }



  return (
    <div className='d-flex vh-100 bg-dark  justify-content-center align-items-center'>
        {Loading ? <div className="spinner-border text-light p-5 " role="status">
            <span className="visually-hidden">Loading...</span>
        </div> : 

        
    <form action="" className='border rounded-5 p-4 bg-light' onSubmit={submitData}>
            <h1 className="h1 text-center">Sign Up</h1>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1"  className="form-label">Name</label>
            <input type="text" name='username' className="form-control" />
            
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" name='password' className="form-control" id="exampleInputPassword1" aria-describedby="passwordHelp"/>
            <div id="passwordHelp" className="form-text">We'll never share your password with anyone else.</div>
        </div>
        <button type="submit" className='btn btn-dark  '>Sign Up</button>
        <a href="/Signin" className='float-end'>Already have an Account?</a>
        {
            Message.status && (
                <div className={`alert alert-${Message.statusText == "Created" ? "primary" : "danger"} mt-4`} role="alert">
                    {Message.data.message || "Something went wrong"  }
                </div>
                )
            
        }
    </form>  }
</div>
  )
}

export default SignUp

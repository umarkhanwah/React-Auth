import React, {useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
// import UserContext from '../context/userContext';





function Header() {
    
    // const {setAuth, Auth} = useContext(UserContext)
    const location  = useLocation();
    const [Auth, setAuth] = useState(false)
    const navigate = useNavigate()

    const checkUser = ()=>{
        

            let authToken =  localStorage.getItem('token');
            
            
            if(authToken == null){
                setAuth(false)
            }
            else{
                setAuth(true)
    
            }
                
            console.log(`Authentication status is ${Auth}`);
            
        }

    const signOut  = (e)=>{
        e.preventDefault();
        if(Auth){
            localStorage.removeItem('token');
            setAuth(false);
            navigate('/signin')
            
        }
    }
            
            
        useEffect(() => {
            checkUser();
        } , [location])
        
        


  

    
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">MernAuth</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className={`nav-link ${location.pathname == '/' ? "active"  : ''}`}  href="/">Home</a>
                        
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${location.pathname == '/about' ? "active"  : ''}`} href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${location.pathname == '/addnote' ? "active"  : ''}`} href="/addnote">Add Note</a>
                    </li>
                    {
                        Auth
                        ? 
                        <li className="nav-item">
                            <a className="nav-link " href='/login' onClick={signOut}>Sign Out</a>
                        </li> 
                        :
                        <li className="nav-item">
                            <a className={`nav-link ${location.pathname == '/signin' ? "active"  : ''}`} href="/signin">Login</a>
                        </li>

                    }
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header

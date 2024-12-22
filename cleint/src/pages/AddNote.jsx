import axios from 'axios';
import React, { useContext, useEffect  , useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';



const AddNote = () => {
    
    let authToken = localStorage.getItem('token');
    
    const [Notes, setNotes] = useState([])
   const navigate = useNavigate();
   const location = useLocation();
    
    const showNotes = ()=>{
        
        axios.get('/api/notes/showNotes' , 
            // Provide Header here
            {headers : {'my_accessToken' : authToken }}
        ).then(
            (res)=>setNotes(res.data.allNotes)
        ).catch(
            (e)=>{
                if(e.status == 401){
                    navigate('/signin')
                }
                console.log(e.data.response)
            }
        )
    }
    
    
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        let {title , description} = e.target;
        axios.post('/api/notes/addnote' , {
            title  :title.value , description : description.value
        } , {
            headers : {
                "my_accessToken"  : authToken
            }
        }).then((res)=>{
            console.log(res);
        }).catch(
            (e)=>console.log(e.response.data.message)
        )
        
        
    }
    
  

    useEffect(() => {
        

       showNotes() 
    } , [location])
        
    
    
  return (
    <div className='container my-5'>
        <form class="d-flex" onSubmit={handleSubmit}>
            <div class="col">
                <div class="mb-3">
                    <label for="" class="form-label">Title</label>
                    <input
                        type="text"
                        name="title"
                        class="form-control"
                    />
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Description</label>
                    <textarea name="description" className='form-control h-100' rows={10} id=""></textarea>
                </div>
                <button className='btn btn-danger' type='submit'>Add Note</button>
            </div>
        </form>
        <div className="row mt-2">
           


            {Notes.map((data , i)=>{
                return (
                    <div className="col">

                    <div className="card" style={{width: "18rem"}}>
                       
                        <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>
                            <p className="card-text">{data.description}</p>
                            
                        </div>
                    </div>
                    </div>
                )
            })}

            
        </div>
    </div>
  )
}

export default AddNote

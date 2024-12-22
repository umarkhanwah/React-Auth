import React from 'react'

function Home() {


    
  return (
    <>

    <div className='container'>
     <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://dummyimage.com/1800x920/dbdbdb/787878.png&text=First+Image" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="https://dummyimage.com/1800x920/dbdbdb/787878.png&text=Second+Image" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="https://dummyimage.com/1800x920/dbdbdb/787878.png&text=Third+Image" className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
     </div>
    </div>
    <div className="container my-4 text-center ">
     
        <h1>New Arrivals</h1>
        <div className="row mt-5">
            <div className="col-3">
            <img src="https://dummyimage.com/180x300/ff00/fff.png&text=+Card+" alt="..."/>

            </div>
            <div className="col-3">
            <img src="https://dummyimage.com/180x300/1bcc00/fff.png&text=+Card+" alt="..."/>

            </div>
            <div className="col-3">
            <img src="https://dummyimage.com/180x300/001aff/fff.png&text=+Card+" alt="..."/>

            </div>
            <div className="col-3">
            <img src="https://dummyimage.com/180x300/00857e/fff.png&text=+Card+" alt="..."/>

            </div>
        </div>
    </div>
    </>
  )
}

export default Home

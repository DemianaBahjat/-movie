import React, { useContext, useState } from 'react'
import { languageContext } from '../../Contexts/LanguageContext'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { authContext } from '../../Contexts/AuthContext';

export default function Navbar() {

  const {isLoggedin, setIsLoggedIn}= useContext(authContext)
  const navigate = useNavigate()
  function logOut (){
   setIsLoggedIn(false)
  }
   const {lang, setLang}= useContext(languageContext)
   const handletoggle= ()=>{
      setLang( lang=== 'en' ? 'ar' :'en')
   }
   const favoriteMoviesCount = useSelector(state => state.favoriteMovies.movies.length)
   return (
     <>
          <nav className="navbar navbar-expand-lg navbar-light mb-5" style={{backgroundColor:"gray"}} >
           <Link className="navbar-brand" href="#">Movies</Link>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarNav">
       <ul className="navbar-nav">
         <li className="nav-item active">
           <Link className="nav-link" to="/home">Home </Link>
        </li>
        <li className="nav-item">
           <Link className="nav-link" to="/test">Test</Link>
        </li>
        <li className="nav-item">
           <Link className="nav-link" to="/movieList">MovieList</Link>
        </li>

        <li className="nav-item">
           <Link className="nav-link" to="/favoriteMovies"> Favorite Movies ({favoriteMoviesCount}) </Link>
        </li>
       
    </ul>
        
  </div>
       {isLoggedin?
  
             <div className="nav-item d-flex justify-content-end align-items-center ">
                <Link className="nav-link m-2 " to="/form" onClick={logOut}>logOut</Link>
            </div>
       :

            <div className="nav-item d-flex justify-content-end align-items-center ">
                <Link className="nav-link m-2 " to="/form">login</Link>
            </div>
}
  

   
  <div className="d-flex justify-content-end me-5">
   <button className='btn btn-secondary' onClick={handletoggle} > change lang </button>

    </div>
 </nav>
    </>
  )
}

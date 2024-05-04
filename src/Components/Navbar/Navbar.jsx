import React, { useContext, useMemo, useState } from 'react'
import { languageContext } from '../../Contexts/LanguageContext'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { authContext } from '../../Contexts/AuthContext';
import CurrencyDropdown from '../CurrencyDropdown/CurrencyDropdown';

export default function Navbar() {

  const {isLoggedin, setIsLoggedIn}= useContext(authContext)
  const navigate = useNavigate()


  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const currencies = {
   USD: 1,
   EUR: 0.85,
   GBP: 0.73,
 };

 const handleChangeCurrency = (currency) => {
   setSelectedCurrency(currency);
 };


  function logOut (){
   setIsLoggedIn(false)
  }

   const {lang, setLang}= useContext(languageContext)
   const {handletoggle}= useContext(languageContext)
   
   const favoriteMoviesCount = useSelector(state => state.favoriteMovies.movies.length)
   return (
     <>
          <nav className="navbar navbar-expand-lg navbar-info mb-5" style={{backgroundColor:"gray"}} >
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
      <CurrencyDropdown
           currencies={currencies}
           selectedCurrency={selectedCurrency}
           handleChangeCurrency={handleChangeCurrency}
      />
       {isLoggedin?
  
             <div className="nav-item d-flex justify-content-end align-items-center ">
                <Link className="nav-link mx-5 " to="/form" onClick={logOut}>logOut</Link>
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

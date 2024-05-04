import React, { useContext } from 'react'
import Test from './Components/Test/Test'
import LanguageContextProvider from './Contexts/LanguageContext'
import { createBrowserRouter,Navigate, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout'
import NotFound from './Components/NotFound/NotFound'
import Home from './Components/Home/Home'
import Form from './Components/Form/Form';
import MovieDetails from './Components/MovieDetails/MovieDetails'
import MovieList from './Components/MovieList/MovieList'
import ProtectRout from './Components/ProtectedRoute/ProtectRout'
import { Provider } from 'react-redux'
import FavoriteMovies from './Components/FavoriteMovies/FavoriteMovies'
import store from './Redux/store'
import AuthContextProvider from './Contexts/AuthContext'

export default function App() {
  
  const routers = createBrowserRouter([
       
    {path:'' , element:<Layout/> , errorElement:<NotFound/>, children:[
      {path:'form', element: <Form/>},

    {path:'' , element: <ProtectRout> <Home/> </ProtectRout>},
    {path:'home' , element:<ProtectRout> <Navigate to={'/'}/> </ProtectRout>},
    { path:'movieDetails/:id' , element: <ProtectRout><MovieDetails/></ProtectRout>},
    {path:'test'  , element: <ProtectRout><Test/></ProtectRout>},
    {path:'movieList' ,element: <ProtectRout><MovieList/></ProtectRout>},
    {path:'favoriteMovies' ,element: <ProtectRout><FavoriteMovies/></ProtectRout>}

    

    ]}
  ])

  return (
    <>
    <Provider store={store}>
      <AuthContextProvider>
            <div dir='ltr'>
                <LanguageContextProvider >
                       <RouterProvider router={routers}></RouterProvider>
                </LanguageContextProvider>
          </div>

      </AuthContextProvider>
    </Provider>
    </>
  )
}

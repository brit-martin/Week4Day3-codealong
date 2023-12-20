import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import './index.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Header/>}>
    <Route index element = {<Home/>} /> 
    <Route path='/about' element= {<About/>} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
  
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
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
    <Route>
    <Route path='/home' element = {<Home/>} />
    <Route path='/about' element= {<About/>} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
  
)

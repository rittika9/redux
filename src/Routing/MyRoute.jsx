import React from 'react'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Navbar from '../Component/Common/Navbar'
import Footer from '../Component/Common/Footer'
import Coffees from '../Pages/Coffees'
import Shop from '../Pages/Shop'
import Blog from '../Pages/Blog'
import Contact from '../Pages/Contact'

const MyRoute = () => {
  return (
    <>
    
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/coffees' element={<Coffees/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
    </Router>
    
    </>
  )
}

export default MyRoute
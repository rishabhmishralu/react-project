import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Bollywood from '../pages/Bollywood'
import Fitness from '../pages/Fitness'
import Hollywood from '../pages/Hollywood'
import Home from '../pages/Home'
import Technology from '../pages/Technology'
import Food from '../pages/Food'
import Header from './Header'
import Nav from './Nav'
import Banaras from '../pages/Banaras'

import Techpages from '../pages/Techpages'
import Burger from '../information/Burger'
import Kgf from '../information/Kgf'
import Rajsthan from '../information/Rajsthan'
import Bollyinfo from '../information/Bollyinfo'
import Fitnessinfo from '../information/Fitnessinfo'
import Agra from '../information/Agra'



const Blogroutes = () => {
  return (
    <div>
   <Header/>
   <Nav/>
    
    <Routes>
       <Route path='/' element={<Home/>}/>
        <Route path='/bollywood' element={<Bollywood/>}/>
       <Route path='/technology' element={<Technology/>}/>
        <Route path='/hollywood' element={<Hollywood/>}/>
        <Route path='/fitness' element={<Fitness/>}/>
      <Route path="/food" element={<Food/>}/>
      <Route path="/banaras" element={<Banaras/>}/>
      <Route path="/kgf" element={<Kgf/>}/>
      <Route path='/tech' element={<Techpages/>}/>
      <Route path='/burger' element={<Burger/>}/>
      <Route path="/raj" element={<Rajsthan/>}/>
      <Route path="/bollyinfo" element={<Bollyinfo/>}/>
      <Route path='/fitnessinfo' element={<Fitnessinfo/>}/>
      <Route path='/agra' element={<Agra/>}/>
   </Routes>


        </div>
  )
}

export default Blogroutes
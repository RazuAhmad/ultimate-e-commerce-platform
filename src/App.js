import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Components/Homepage/Homepage'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
    <Navbar/>
   <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/home' element={<Homepage/>} />
    
   </Routes>
    </div>
  )
}

export default App